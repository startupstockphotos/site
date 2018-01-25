/** @jsx preact.h */
import preact from 'preact'
import connect from 'state/connect.js'
import Outer from 'components/Outer.js'
import PhotoCard from 'components/PhotoCard.js'

export default connect(state => ({
  photos: state.photos
}))(
  props => (
    <Outer>
      <ul className='photo-grid f aic fw'>
        {props.photos.map(p => (
          <li className='photo-grid__photo'>
            <PhotoCard photo={p} />
          </li>
        ))}
      </ul>
    </Outer>
  )
)
