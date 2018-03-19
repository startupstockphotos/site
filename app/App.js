import React from 'react'
import Nav from './components/Nav.js'

export default function App ({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
