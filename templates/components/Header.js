const cx = require('nanoclass')

module.exports = function Header (props, children) {
  return `
    <header id='header' class='${cx(['header rel z10 fix top left right x',
      props.photo && 'is-photo-route'
    ])}' data-component='header'>
      <div class='header__inner rel f aic jcb'>
        <div class='header__left rel f aic x'>
          <a href='/' class='header__logo block rel f aic'>
            <svg class='block' viewBox='0 0 208 90' width="208" height="90" xmlns="http://www.w3.org/2000/svg"> <path d="M182.946087 16.123478h-8.606957v16.702609h8.692174c5.794783 0 9.373913-2.812174 9.373913-8.436522 0-5.19826-3.323478-8.266087-9.45913-8.266087zm.511304 28.911305h-9.118261V63.10087H159V2h24.201739C200.16 2 208 10.436522 208 23.389565c0 13.37913-7.754783 21.730435-24.542609 21.645218zM166.5 88.293574c-4.856557 0-8.793574-3.937017-8.793574-8.793574s3.937017-8.793574 8.793574-8.793574 8.793574 3.937017 8.793574 8.793574-3.937017 8.793574-8.793574 8.793574zM37.024395 90C10.789577 90 1.194435 78.582996.587148 58.178138h17.004049c.364372 12.024291 6.194332 17.85425 19.676113 17.85425 11.538462 0 16.761134-5.829959 16.761134-12.753036.121457-9.352227-10.566802-11.052631-21.983806-13.360324-13.724696-2.793522-28.421052-6.31579-28.421052-25.1417C3.623586 11.53846 13.461642 0 34.473788 0c22.834008 0 33.036437 10.566802 33.643725 27.935223H51.599294c-.728745-9.838057-5.34413-14.5749-17.368421-14.5749-10.566802 0-14.574899 5.222673-14.574899 11.17409 0 8.866397 9.959514 10.20243 21.25506 12.631579 14.210527 3.036437 28.906883 6.558704 29.028341 25.748988C70.060833 77.732793 58.643828 90 37.024395 90zm78.019666 0c-26.234818 0-35.82996-11.417004-36.437247-31.821862h17.004049c.364372 12.024291 6.194332 17.85425 19.676113 17.85425 11.538462 0 16.761134-5.829959 16.761134-12.753036.121457-9.352227-10.566802-11.052631-21.983806-13.360324-13.724696-2.793522-28.421053-6.31579-28.421053-25.1417C81.643252 11.53846 91.481309 0 112.493455 0c22.834008 0 33.036437 10.566802 33.643725 27.935223H129.61896c-.728745-9.838057-5.34413-14.5749-17.368421-14.5749-10.566802 0-14.574899 5.222673-14.574899 11.17409 0 8.866397 9.959514 10.20243 21.255061 12.631579 14.210526 3.036437 28.906882 6.558704 29.02834 25.748988C148.080498 77.732793 136.663494 90 115.044061 90z" fill="currentColor" fill-rule="evenodd"/> </svg>
          </a>

          <button id='headerBack' class='header__back button button--outline rel ml075 s6'>&larr; back</button>

          <div class='header__divider rel mx075 s4'>/</div>

          <form data-component='search' class='header__search rel s4 z1 x'>
            <input class='block x' type='search' name='search' placeholder='Search - ⌘s' required value='${props.query || ''}' />
            <input type='submit' value='Search' />
            <button type='button' class='abs top right bottom mya'>
              <svg viewBox="0 0 16 16" class='abs fill ma'>
                <use xlink:href="#x"></use>
              </svg>
            </button>
          </form>
        </div>

        <div class='header__right f aic'>
          <button class='header__donate button'>Donate</button>
          <button id='menuToggle' class='header__menu-toggle rel'>
            <span></span>
          </button>
        </div>
      </div>
    </header>

    <div class='header-spacer rel'></div>
  `
}
