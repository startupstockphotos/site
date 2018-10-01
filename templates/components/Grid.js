const GridPhoto = require('templates/components/GridPhoto.js')

module.exports = function Grid (props, children) {
  return `
    <section class='grid rel'>
      <ul class='grid__row rel f fw' data-component='grid'>
        ${props.photos.reduce((str, photo) => {
          return str += GridPhoto(photo)
        }, '')}
      </ul>

      <div class='load-more abs bottom left right f aic x jcc z10' data-component='loadMore'>
        <button class='button button--large button--white'>
          <span>Load More</span>
          <svg class='block abs fill ma' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'><line x1='12' y1='2' x2='12' y2='6'></line><line x1='12' y1='18' x2='12' y2='22'></line><line x1='4.93' y1='4.93' x2='7.76' y2='7.76'></line><line x1='16.24' y1='16.24' x2='19.07' y2='19.07'></line><line x1='2' y1='12' x2='6' y2='12'></line><line x1='18' y1='12' x2='22' y2='12'></line><line x1='4.93' y1='19.07' x2='7.76' y2='16.24'></line><line x1='16.24' y1='7.76' x2='19.07' y2='4.93'></line></svg>
        </button>
      </div>
    </section>
  `
}
