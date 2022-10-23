import React from 'react'
import './EntityLoader.scss'

export default function EntityLoader({ fullPage, absolute, size, position }) {
  return (
    <div className={`loader-wrapper ${ position || 'center' } ${ absolute || 'absolute' } ${ fullPage ? 'full-page' : '' }`}>
      <div className={`loader ${size || 'small'}`}></div>
    </div>
  )
}
