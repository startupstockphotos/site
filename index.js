/** @jsx h */
import express from 'express'
import compression from 'compression'

import { h } from 'preact'
import render from 'preact-render-to-string'
import router from 'app/router.js'
import store from 'state/store.js'
import fetch from 'node-fetch'

const PROD = process.env.NODE_ENV === 'production'
const ENDPOINT = PROD ? 'https://ssp-api.now.sh' : 'http://localhost:3001'

const app = express()
app.use(compression())
app.use(express.static('./public'))

let cache
function getPhotos (query) {
  if (query) {
    return fetch(`${ENDPOINT}/photos?q=${query}`)
      .then(res => res.json())
  }
  if (!cache) {
    cache = null
    cache = fetch(`${ENDPOINT}/photos`)
      .then(res => res.json())
  }
  return cache
}

app.get('*', (req, res) => {
  router.resolve(req.originalUrl).then(({ component: Comp, params, options }) => {
    getPhotos(params.query).then(photos => {
      store.hydrate({ photos })

      res.send(`
        <html>
          <head>
            <title>Startup Stock Photos</title>
            <script src='/index.js' defer></script>
            <link rel='stylesheet' href='/style.css'/>
            <script>window.__hydrate__ = ${JSON.stringify(store.state)}</script>
            <script>window.__api__ = "${ENDPOINT}"</script>
          </head>
          <body>
            ${render(<Comp />)}
          </body>
        </html>
      `)

      store.reset()
    })
  })
})

app.listen(3000)
