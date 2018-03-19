import React from 'react'
import Outer from 'components/Outer.js'
import PhotoCard from 'components/PhotoCard.js'

function PhotoGrid (props) {
  return (
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
}

export default PhotoGrid
