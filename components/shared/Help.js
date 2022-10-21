import React from 'react'

export default function Help({ text }) {

  return (
    <div className='info-icon flex-box items-center'>
      <div className='info-box'>
        { text }
      </div>
    </div>
  )
}
