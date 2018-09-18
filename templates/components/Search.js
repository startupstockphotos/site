module.exports = function Search (props, children) {
  return `
    <header class='header rel z10'>
      <div class='header__inner fix top left x'>
        <span class='block header__inner__bg abs fill'></span>

        <div class='outer'>
          <div class='header__container container'>
            <div class='header__bar rel'>
              <span class='block header__bar__bg abs fill z0'></span>
              <form data-component='search' class='search rel s4 z1'>
                <input class='block x' type='search' name='search' placeholder='Type something' required />
                <input type='submit' value='Search' />
                <button type='button' class='abs top right bottom mya'>
                  <svg viewBox="0 0 16 16" class='abs fill ma'>
                    <use xlink:href="#x"></use>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
}
