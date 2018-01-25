/** @jsx preact.h */
import preact from 'preact'
import connect from 'state/connect.js'
import fetch from 'unfetch'

let timeout

export default connect(state => ({
  query: state.query,
  photos: state.photos
}))(
  ({ photos, query, hydrate }) => (
    <div className='search f aic jcb'>
      <input
        type='search'
        value={query}
        placeholder='Type something'
        onKeyup={e => {
          const val = e.target.value
          hydrate({ query: val, location: val })
          timeout && clearTimeout(timeout)
          timeout = setTimeout(() => {
            fetch(`${window.__api__}/photos?q=${val}`)
              .then(res => res.json())
              .then(photos => {
                hydrate({ photos })()
              })
          }, 500)
        }} />

      <p className='cw2 my0'>{photos.length} photos</p>
    </div>
  )
)
