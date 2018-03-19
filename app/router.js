import React from 'react'
import { router, route } from 'foil'

import Home from 'routes/Home.js'
import About from 'routes/About.js'

export default router(
  About,
  Home,
  route({
    path: '*',
    payload: {
      Component: props => <h1>404</h1>
    }
  })
)
