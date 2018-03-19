import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from '@picostate/react'
import { Router } from '@foil/react'

import router from 'app/router.js'
import store from 'app/store.js'
import App from 'app/App.js'
import { cleanLocation } from 'app/util.js'

import './styles/main.css'

document.addEventListener('DOMContentLoaded', e => {
  store.hydrate(window.__hydrate__)

  router.resolve(cleanLocation(window.location.href), ({ payload, context }) => {
    store.hydrate({ query: context.params.query })

    hydrate((
      <Provider store={store}>
        <App>
          <Router router={router} context={context} resolve={({ payload, context }, render) => {
            render(payload.Component)
          }}>
            <payload.Component context={context} />
          </Router>
        </App>
      </Provider>
    ), document.getElementById('root'))
  })
})
