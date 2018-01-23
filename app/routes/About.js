/** @jsx h */
import { h } from 'preact'
import { route } from 'scouter'
import App from 'app/App.js'

const path = '/about'

function component (props) {
  return (
    <App>
      <h1>About</h1>
    </App>
  )
}

export default route({ path, component })
