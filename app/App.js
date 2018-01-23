/** @jsx h */
import { h } from 'preact'
import Link from './components/Link.js'

export default function App ({ children }) {
  return (
    <main>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/account/login'>Login</Link>
      </nav>
      {children}
    </main>
  )
}
