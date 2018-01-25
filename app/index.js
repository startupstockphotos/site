/** @jsx preact.h */
import preact from 'preact'
import router from './router.js'
import store from 'state/store.js'
import { cleanLocation } from 'app/util.js'

let mounted = false

document.addEventListener('DOMContentLoaded', e => {
  let root = document.body.children[0]

  function rerender (location = window.location.pathname) {
    router.resolve(location).then(({ component: Comp, params, options }) => {
      if (!mounted) {
        if (params.query) {
          store.hydrate({ query: params.query })
        }
        mounted = true
      }

      if (options.title) {
        document.title = options.title(store.state)
      }

      root = preact.render(<Comp />, document.body, root)
    })
  }

  store.hydrate(Object.assign(window.__hydrate__, {
    location: cleanLocation(window.location.href)
  }))

  store.listen(state => {
    const path = state.location || '/'
    window.history.pushState({}, '', path)
    rerender(path)
  })

  rerender()
})
