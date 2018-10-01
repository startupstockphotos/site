import fetch from 'unfetch'
import operator from 'operator'
import picoapp from 'picoapp'

import 'styles/main.css'

import images from 'scripts/lib/images.js'
import { uniq } from 'scripts/lib/util.js'
import search from 'scripts/components/search.js'
import grid from 'scripts/components/grid.js'
import header from 'scripts/components/header.js'
import loadMore from 'scripts/components/loadMore.js'

const components = {
  search,
  grid,
  header,
  loadMore
}

const initialState = Object.assign(
  {
    query: '',
    page: 0,
    hasHistory: !/about|photos/.test(window.location.pathname)
  },
  { photoCache: window.__hydrate.photos || [] },
  window.__hydrate
)

const actions = {
  search: (query, page = 0) => state => {
    return fetch(`${initialState.api}/api/v1/search/${query}?page=${page}`, {
      mode: 'cors'
    })
      .then(r => r.json())
      .then(({ photos, pages, hits, query }) => {
        return {
          query,
          page: 0, // reset
          photos,
          pages,
          hits,
          photoCache: uniq('id', state.photoCache.concat(photos))
        }
      })
  },
  loadMore: () => state => {
    const page = state.page + 1

    return state.query ? (
      fetch(`${initialState.api}/api/v1/search/${query}?page=${page}`, {
        mode: 'cors'
      })
        .then(r => r.json())
        .then(({ photos, pages, hits, query }) => {
          console.log(query)
          return {
            query,
            page,
            photos: state.photos.concat(photos),
            pages,
            hits,
            photoCache: uniq('id', state.photoCache.concat(photos))
          }
        })
    ) : (
      fetch(`${initialState.api}/api/v1/photos?page=${page}`, {
        mode: 'cors'
      })
        .then(r => r.json())
        .then(({ photos, pages, hits }) => {
          return {
            query: '',
            page,
            photos: state.photos.concat(photos),
            pages,
            hits,
            photoCache: uniq('id', state.photoCache.concat(photos))
          }
        })
    )
  },
  resetSearch: () => state => ({
    page: 0,
    query: '',
    hits: state.photoCache.length,
    pages: Math.ceil(state.photoCache.length / 24),
    photos: state.photoCache
  })
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
