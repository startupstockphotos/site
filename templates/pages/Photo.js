const App = require('templates/components/App.js')

module.exports = function Photo (props, children) {
  const { placeholder, display, raw } = props.photo.images
  const { width, height, size } = props.photo.stats

  return App(props, `
    <section class='photo'>
      <header>
        <div class='outer'>
          <h1>#${props.photo.id}</h1>
        </div>
      </header>

      <div class='outer'>
        <div class='photo__stats f aic'>
          <div>
            <a href='${raw}'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill='currentColor' d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>
              </svg>
            </a>
          </div>
          <span></span>
          <div class='h5'>${width}x${height}px</div>
          <span></span>
          <div class='h5'>${size.toFixed(2)}MB</div>
          <span></span>
        </div>
      </div>

      <div class='photo__img'>
        <img class='block x' src='${placeholder}' data-src='${display}' />
      </div>
    </section>
  `)
}
