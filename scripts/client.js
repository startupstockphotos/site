import fetch from 'unfetch'
import operator from 'operator'
import picoapp from 'picoapp'

import 'styles/main.css'

import images from 'scripts/lib/images.js'
import { uniq } from 'scripts/lib/util.js'
import search from 'scripts/components/search.js'
import grid from 'scripts/components/grid.js'
import header from 'scripts/components/header.js'

const components = {
  search,
  grid,
  header
}

const initialState = Object.assign(
  { photoCache: window.__hydrate.photos || [] },
  window.__hydrate,
  {
    hasHistory: !/about|photos/.test(window.location.pathname)
  }
)

const actions = {
  search: query => state => {
    return fetch(`${initialState.api}/api/v1/search/${query}`, {
      mode: 'cors'
    })
      .then(r => r.json())
      .then(photos => {
        return {
          photos,
          photoCache: uniq('id', state.photoCache.concat(photos))
        }
      })
  },
  resetSearch: () => state => ({ photos: state.photoCache })
}

const app = picoapp(components, initialState, actions)
const router = operator('#root')

router.on('after', state => {
  window.history.pushState({}, '', state.pathname)

  if (!/about|photos/.test(state.pathname) && !app.state.hasHistory) {
    app.hydrate({ hasHistory: true })
  }

  if (/photos\//.test(state.pathname)) {
    document.getElementById('header').classList.add('is-photo-route')
  } else {
    document.getElementById('header').classList.remove('is-photo-route')
  }

  app.mount()
  images()
})

app.mount()
images()

export {
  app,
  router
}
