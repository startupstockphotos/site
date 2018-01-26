/** @jsx preact.h */
import preact from 'preact'
import history from 'state/history'

export default function Link ({ href, children, hydrate, ...props }) {
  return (
    <a href={href} {...props} onClick={e => {
      e.preventDefault()
      history.hydrate({ location: href })()
    }}>{children}</a>
  )
}
