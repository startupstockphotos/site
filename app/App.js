/** @jsx preact.h */
import preact from 'preact'
import Nav from './components/Nav.js'

export default function App ({ children }) {
  return (
    <main>
      <Nav />
      {children}
    </main>
  )
}
