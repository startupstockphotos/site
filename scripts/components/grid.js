import { component } from 'picoapp'
import GridPhoto from 'templates/components/GridPhoto.js'

export default component(({ node, state, actions }) => {
  return {
    onStateChange ({ photos }) {
      node.innerHTML = photos.reduce((str, photo) => {
        return str += GridPhoto(photo)
      }, '')
    }
  }
})
