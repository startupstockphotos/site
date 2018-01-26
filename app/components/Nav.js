/** @jsx preact.h */
import preact from 'preact'
import cx from 'classnames'
import connect from 'state/connect'
import Outer from 'components/Outer.js'
import Logo from 'components/Logo.js'
import Link from 'components/Link.js'
import SearchBar from 'components/SearchBar.js'

export default connect(state => ({
  location: state.location,
  scrolled: state.homeIsScrolled
}))(
  function Nav ({ location, hydrate, scrolled }) {
    return (
      <span>
        <header className={cx('nav fix top left right x z1', {
          'is-scrolled': scrolled
        })}>
          <div className='nav__inner'>
            <Outer>
              <div className='f jcb aic'>
                <Link className='nav__logo' href='/'>
                  <Logo />
                </Link>

                <nav className='f aic jce'>
                  <Link href='/donate' className='caps h6' style={{ marginRight: '2em' }}>Donate</Link>
                  <Link href='/about' className='caps h6'>About</Link>
                </nav>
              </div>
            </Outer>
          </div>

          <div className='nav__search'>
            <Outer>
              <SearchBar />
            </Outer>
          </div>
        </header>

        <div className='header-spacer' />
      </span>
    )
  }
)
