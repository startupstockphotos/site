/** @jsx preact.h */
import preact from 'preact'
import { route } from 'scouter'
import connect from 'state/connect.js'
import App from 'app/App.js'
import PhotoGrid from 'components/PhotoGrid.js'

const path = ':query'

const component = connect(state => ({
  scrolled: state.homeIsScrolled
}))(
  class Home extends preact.Component {
    constructor (props) {
      super(props)

      this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount () {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount () {
      this.props.hydrate({
        homeIsScrolled: false
      })()

      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll (e) {
      requestAnimationFrame(() => {
        if (window.pageYOffset > 200 && !this.props.scrolled) {
          this.props.hydrate({
            homeIsScrolled: true
          })()
        } else if (window.pageYOffset < 200 && this.props.scrolled) {
          this.props.hydrate({
            homeIsScrolled: false
          })()
        }
      })
    }

    render (props, state) {
      return (
        <App>
          <PhotoGrid />
        </App>
      )
    }
  }
)

const options = {
  title: state => (state.query ? (
    `${state.query} | `
  ) : '') + 'Startup Stock Photos'
}

export default route({ path, component, options })
