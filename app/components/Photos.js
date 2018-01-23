/** @jsx h */
import { h } from 'preact'
import connect from 'state/connect.js'

export default connect(state => ({
  photos: state.photos
}))(
  props => (
    <ul>
      {props.photos.map(p => (
        <li>{p.id}</li>
      ))}
    </ul>
  )
)
