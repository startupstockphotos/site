/** @jsx h */
import { h, render } from 'preact'
import router from './router.js'
import store from 'state/store.js'

document.addEventListener('DOMContentLoaded', e => {
  let root = document.body.children[0]

  function update (location = window.location.pathname) {
    router.resolve(location).then(({ component: Comp }) => {
      root = render(<Comp />, document.body, root)
    })
  }

  store.hydrate(window.__hydrate__)

  store.listen(state => {
    window.history.pushState({}, '', state.location)
    update(state.location)
  })

  update()
})
