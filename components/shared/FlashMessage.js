import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'

const modes = {
  'success': 'fa-check',
  'error': 'fa-hexagon-exclamation',
  'notice': 'fa-flag'
}

const FlashMessage = forwardRef( (props, ref) => {
  const [message, setMessage] = useState('')
  const [mode, setMode] = useState('')
  const [showFlash, setShowFlash] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [fadeTimeout, setFadeTimeout] = useState(null)
  const [closeTimeout, setCloseTimeout] = useState(null)

  useEffect(() => {
    if (message) {
      setTimeout( () => setShowFlash(true), 100)
      startTimeout()
    }
  }, [message])

  useImperativeHandle(ref, () => ({ show }))

  function show(flashMessage, flashMode) {
    if (flashMessage) {
      setMessage(flashMessage)
      setMode(flashMode || 'success')
    }
  }

  function startTimeout() {
    setFadeTimeout(setTimeout( () => setFadeOut(true), 3000))
    setCloseTimeout(setTimeout( () => {
      setShowFlash(false)
      setMessage('')
      setMode('')
    }, 4000))
  }

  function cancelTimeout() {
    clearTimeout(fadeTimeout)
    clearTimeout(closeTimeout)
  }

  if (showFlash) {
    return (
      <div
        className={ `flash-container ${ mode } ${ false ? 'animated fadeOutRight' : 'animated fadeInRight' }` }
        onMouseEnter={ cancelTimeout }
        onMouseLeave={ startTimeout }
      >
        <div className='flex-box items-center content-center'>
          <i className={ `fa-light ${ modes[mode || 'success'] }` }/>
          <div style={{ marginLeft: 20 }}>
            { message }
          </div>
        </div>
      </div>
    )

  } else {
    return null
  }
})

export default FlashMessage
