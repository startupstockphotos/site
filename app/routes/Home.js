/** @jsx h */
import { h } from 'preact'
import { route } from 'scouter'
import App from 'app/App.js'
import Photos from 'components/Photos.js'

const path = '/'

function component (props) {
  return (
    <App>
      <h1>Home</h1>

      <Photos />
    </App>
  )
}

export default route({ path, component })
