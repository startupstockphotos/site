/** @jsx preact.h */
import preact from 'preact'
import createStore from 'picostate'
import router from 'app/router.js'
import store from 'state/store.js'
import history from 'state/history.js'
import App from 'app/App.js'
import { cleanLocation } from 'app/util.js'

let mounted = false

class Provider extends preact.Component {
  constructor (props) {
    super(props)

    this.store = props.store || createStore(props.initialState || {})
    this.state = this.store.state
    this.store.listen(this.setState.bind(this))
  }

  render () {
    return this.props.children[0]
  }
}

function createRouter (resolver) {
  return class Router extends preact.Component {
    constructor (props) {
      super (props)

      this.state = {
        component: props.children[0]
      }

      resolver(this._update.bind(this))
    }

    _update (component) {
      this.setState({ component })
    }

    render () {
      console.log('render')
      const props = this.props
      const { component: Comp } = this.state

      return typeof Comp === 'function' ? <Comp /> : Comp
    }
  }
}

const Router = createRouter(render => {
  history.listen(state => {
    const path = state.location || '/'
    window.history.pushState({}, '', path)

    router.resolve(state.location).then(({ component, params, options }) => {
      if (options.title) {
        document.title = options.title(history.state)
      }

      render(component)
    })
  })
})

document.addEventListener('DOMContentLoaded', e => {
  history.hydrate({
    location: cleanLocation(window.location.href)
  })

  store.hydrate(window.__hydrate__)

  router.resolve(cleanLocation(window.location.href)).then(({ component: Comp, params }) => {
    store.hydrate({ query: params.query })

    preact.render((
      <Provider store={store}>
        <App>
          <Router>
            <Comp />
          </Router>
        </App>
      </Provider>
    ), document.body, document.body.children[0])
  })
})
