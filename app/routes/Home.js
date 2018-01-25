/** @jsx preact.h */
import preact from 'preact'
import { route } from 'scouter'
import App from 'app/App.js'
import PhotoGrid from 'components/PhotoGrid.js'

const path = ':query'

function component (props) {
  return (
    <App>
      <PhotoGrid />
    </App>
  )
}

const options = {
  title: state => (state.query ? (
    `${state.query} | `
  ) : '') + 'Startup Stock Photos'
}

export default route({ path, component, options })
