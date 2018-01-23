/** @jsx h */
import { h } from 'preact'
import { router, route } from 'scouter'

import Home from 'routes/Home.js'
import About from 'routes/About.js'

export default router(
  Home,
  About
)
