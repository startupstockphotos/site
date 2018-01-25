/** @jsx preact.h */
import preact from 'preact'

export default function Outer ({ children }) {
  return (
    <div className='outer rel'>{children}</div>
  )
}
