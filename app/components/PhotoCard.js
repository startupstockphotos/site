/** @jsx preact.h */
import preact from 'preact'

export default function PhotoCard ({ photo }) {
  return (
    <figure className='photo-card'>
      <div className='photo-card__img rel' style={{ backgroundColor: `#${photo.color}` }}>
        <img src={photo.file.url + '?fm=jpg&fl=progressive&w=800'} className='x y abs fill' />
      </div>
    </figure>
  )
}
