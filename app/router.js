/** @jsx preact.h */
import preact from 'preact'
import { router, route } from 'scouter'

import Home from 'routes/Home.js'
import About from 'routes/About.js'

export default router(
  About,
  Home,
  route({
    path: '*',
    component: props => <h1>404</h1>
  })
)
