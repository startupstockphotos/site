require('module-alias').addAliases(
  require('./spaghetti.config.js').alias
)

const fetch = require('node-fetch')
const createStore = require('picostate')
const { router, route } = require('foil')

const { NOW } = process.env

const api = NOW ? 'https://api.startupphotos.com' : 'http://localhost:3001'

const routes = [
  route({
    path: '/',
    payload: {
      title: 'Startup Stock Photos',
      view: require('templates/pages/Index.js'),
      load ({ context, store }) {
        return fetch(`${api}/api/v1/photos`)
          .then(r => r.json())
          .then(photos => {
            store.hydrate({ photos })
          })
      }
    }
  }),
  route({
    path: '/about',
    payload: {
      title: 'About',
      view: require('templates/pages/Index.js')
    }
  })
]

require('connect')()
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

          res.end(view(props))
        })
    })
  })
  .listen(3000)
