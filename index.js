require('module-alias').addAliases(
  require('./spaghetti.config.js').alias
)

const fetch = require('node-fetch')
const createStore = require('picostate')
const { router, route } = require('foil')

const { NOW } = process.env

const api = NOW ? 'https://ssp-api.now.sh' : 'http://localhost:3001'

const routes = [
  route({
    path: '/about',
    payload: {
      title: 'About',
      view: require('templates/pages/Index.js')
    }
  }),
  route({
    path: '/photos/:id',
    payload: {
      title: 'Startup Stock Photos',
      view: require('templates/pages/Photo.js'),
      load ({ context, store }) {
        const { id } = context.state.params

        return fetch(`${api}/api/v1/photos/${id}`)
          .then(r => r.json())
          .then(photo => {
            store.hydrate({
              photo
            })
          })
      }
    }
  }),
  route({
    path: ':query',
    payload: {
      title: 'Startup Stock Photos',
      view: require('templates/pages/Index.js'),
      load ({ context, store }) {
        const { query } = context.state.params

        return fetch(`${api}/api/v1/search/${query}`)
          .then(r => r.json())
          .then(res => {
            store.hydrate(res)
          })
      }
    }
  }),
  route({
    path: '/',
    payload: {
      title: 'Startup Stock Photos',
      view: require('templates/pages/Index.js'),
      load ({ context, store }) {
        return fetch(`${api}/api/v1/photos`)
          .then(r => r.json())
          .then(res => {
            store.hydrate(res)
          })
      }
    }
  }),
]

require('connect')()
  .use(require('compression')())
  .use(require('serve-static')('static'))
  .use((req, res) => {
    const url = req.url

    const app = router(routes)
    const store = createStore({ api })

    app.resolve(req.url, ({ payload, context }) => {
      const { title, view, load } = payload

      Promise.resolve(load ? load({ context, store }) : true)
        .then(() =>  {
          const props = Object.assign({ title }, store.state)

          res.setHeader('Content-Type', 'text/html')
          res.end(view(props))
        })
        .catch(e => {
          console.log(e)
          res.setHeader('Content-Type', 'text/plain')
          res.end('404')
        })
    })
  })
  .listen(3000)
