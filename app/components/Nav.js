import React from 'react'
import cx from 'classnames'
import { init, getBounds } from 'lib/logoHelpers.js'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount () {
    this.stick()
  }

  stick () {
    this.sticky = init(this.logo, this.logoBounds)
  }

  unstick () {
    this.sticky.destroy()
  }

  open () {
    const bounds = getBounds(this.logo)
    const overlay = getBounds(this.overlay)

    const vh = window.innerHeight
    const vw = window.innerWidth

    const hyp = Math.sqrt((vh * vh) + (vw * vw))
    const scaleX = (hyp / overlay.width) * 2
    const scaleY = (hyp / overlay.height) * 2

    this.overlay.style.opacity = 1
    this.overlay.style.left = `${bounds.left}px`
    this.overlay.style.top = `${bounds.top}px`
    this.overlay.style.transform = `scale(${scaleX}, ${scaleY})`

    setTimeout(() => {
      this.setState({
        open: true
      })
      this.unstick()
    }, 600)
  }

  close () {
    const bounds = getBounds(this.logo)

    this.overlay.style.left = `${bounds.left}px`
    this.overlay.style.top = `${bounds.top}px`
    this.overlay.style.transform = ``
    setTimeout(() => {
      this.setState({
        open: false
      })
      this.overlay.style.opacity = 0
      this.stick()
    }, 600)
  }

  toggle () {
    this.state.open ? this.close() : this.open()
  }

  render () {
    const { open } = this.state

    return (
      <React.Fragment>
        <div ref={c => { this.overlay = c }} className='nav-overlay fix top left z1' />

        <header className={cx('nav f aic jce rel z2')}>
          <div ref={c => { this.logoBounds = c }} className='logo-bounds abs top left'>
            <button ref={c => { this.logo = c }} className={cx('logo abs fill ma', {
              'is-open': open
            })} onClick={this.toggle.bind(this)} />
          </div>

          <button className={cx('button button--border', {
            'button--white': open
          })}>Donate</button>
        </header>
      </React.Fragment>
    )
  }
}

export default Nav
