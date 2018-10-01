import { component } from 'picoapp'
import morph from 'nanomorph'
import images from 'scripts/lib/images.js'
import GridPhoto from 'templates/components/GridPhoto.js'

export default component(({ node, state, actions }) => {
  return {
    onStateChange ({ photos, pages, page, hits }) {
      const next = node.cloneNode()
      next.innerHTML = photos.reduce((str, photo) => {
        return str += GridPhoto(photo)
      }, '')
      morph(node, next)
      images()
    }
  }
})
