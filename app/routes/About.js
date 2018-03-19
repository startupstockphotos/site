import React from 'react'
import { route } from 'foil'
import App from 'app/App.js'

function About (props) {
  return (
    <App>
      <h1>About</h1>
    </App>
  )
}

export default route({
  path: '/about',
  payload: {
    Component: About,
    cache: '1d'
  }
})
