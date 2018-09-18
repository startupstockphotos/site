import fetch from 'unfetch'
import operator from 'operator'
import picoapp from 'picoapp'

import 'styles/main.css'

import { uniq } from 'scripts/lib/util.js'
import search from 'scripts/components/search.js'
import grid from 'scripts/components/grid.js'

const components = {
  search,
  grid
}

const initialState = Object.assign(
  { photoCache: window.__hydrate.photos },
  window.__hydrate
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

app.mount()
