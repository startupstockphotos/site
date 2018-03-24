import React from 'react'
import { route } from 'foil'
import Search from 'components/Search.js'

function Home (props, state) {
  return (
    <div>
      <Search />
    </div>
  )
}

export default route({
  path: ':query',
  payload: {
    Component: Home,
    cache: '1d'
  }
})
