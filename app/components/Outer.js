import React from 'react'

export default function Outer ({ children }) {
  return (
    <div className='outer rel'>{children}</div>
  )
}
