/** @jsx h */
import express from 'express'
import compression from 'compression'

import { h } from 'preact'
import render from 'preact-render-to-string'
import router from 'app/router.js'
import store from 'state/store.js'
import fetch from 'node-fetch'

const app = express()
app.use(compression())
app.use(express.static('./public'))

app.get('*', (req, res) => {
  router.resolve(req.originalUrl).then(({ component: Comp, params, options }) => {
    fetch('https://ssp-api.now.sh/photos')
      .then(res => res.json())
      .then(photos => {
        store.hydrate({ photos })

        res.send(`
          <html>
            <head>
              <title>Startup Stock Photos</title>
              <script src='/index.js' defer></script>
              <script>window.__hydrate__ = ${JSON.stringify(store.state)}</script>
            </head>
            <body>
              ${render(<Comp />)}
            </body>
          </html>
        `)
      })
  })
})

app.listen(3000)
