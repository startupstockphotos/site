require('now-env')

const debug = require('debug')('index')
const server = require('connect')()
const router = require('router')()
const cors = require('cors')
const compression = require('compression')
const parser = require('body-parser')
const helmet = require('helmet')
const serve = require('serve-static')
const ms = require('ms')
const metaTags = require('html-meta-tags')
const { cache, createCache } = require('./cache.js')

const React = require('react')
const { Provider } = require('@picostate/react')
const { Router } = require('@foil/react')
const { renderToNodeStream } = require('react-dom/server')
const foil = require('app/router.js').default
const store = require('app/store.js').default
const meta = require('app/meta.js').default
const App = require('app/App.js').default

const NODE_ENV = process.env.NODE_ENV

server.use(helmet())
server.use(compression())
server.use(cors())
server.use(parser.json())
server.use(serve('./public'))

router.get('*', (req, res) => {
  const hit = cache.get(req.originalUrl)

  if (hit) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(hit)
    res.end()
    debug(`Served cached response for ${req.originalUrl}`)
    return
  } else {
    debug(`Cache miss for ${req.originalUrl}`)
  }

  foil.resolve(req.originalUrl, ({ payload, context, redirect }) => {
    if (redirect.to) {
      // should eventually be a 301
      res.writeHead(NODE_ENV === 'production' ? 302 : 302, {
        Location: redirect.to
      })
      res.end()
      return
    }

    const headTags = metaTags(meta.state)

    let responseStream = res
    if (payload.cache) {
      const maxAge = NODE_ENV === 'production' ? payload.cache : '1m'
      responseStream = createCache(req.originalUrl, ms(maxAge))
      responseStream.pipe(res)
      debug(`Caching ${req.originalUrl} for ${maxAge}`)
    }

    responseStream.write(`<!doctype html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>${meta.state.title}</title>
          ${headTags}
          ${NODE_ENV === 'production' ? `<link rel='stylesheet' href='/style.css' />` : ''}
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700" rel="stylesheet"> 
        </head>
        <body>
          <div id='root'>`
    )

    const stream = renderToNodeStream((
      <Provider store={store}>
        <App>
          <Router router={router} context={context}>
            <payload.Component context={context} />
          </Router>
        </App>
      </Provider>
    ))
    stream.pipe(responseStream, { end: false })
    stream.on('end', () => {
      responseStream.write(`</div>
            <script src='${NODE_ENV === 'production' ? '/index.js' : 'http://localhost:8080/index.js'}'></script>
            <script>
              window.__hydrate__ = ${JSON.stringify(store.state)}
            </script>
            <script src='https://clare-dev.myshopify.com/services/countries.js' defer></script>
          </body>
        </html>
      `)
      responseStream.end()

      /**
       * Clear store between requests
       */
      store.reset()
      meta.reset()
    })
  })
})

server.use(router)

export default server
