const GridPhoto = require('templates/components/GridPhoto.js')

module.exports = function Grid (props, children) {
  return `
    <section class='grid'>
      <ul class='grid__row rel f fw' data-component='grid'>
        ${props.photos.reduce((str, photo) => {
          return str += GridPhoto(photo)
        }, '')}
      </ul>
    </section>
  `
}
