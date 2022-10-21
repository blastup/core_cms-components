import React from 'react'

export default function NumberInput({ number, setNumber, type, step, min, max }) {
  const numberType = type || 'integer'
  const numberStep = step || (numberType === 'integer' ? (step ? parseInt(step) : 1) : (step ? parseFloat(step).toFixed(2) : 0.1))
  const numberMin = min || 0

  function handleChangeInput(event) {
    const value = event.target.value

    if (numberType === 'integer' ? value.match(/^\d*$/) : value.match(/^(\d+\.?\d*)?$/)) {
      if ((parseFloat(value) || 0) < numberMin) {
        return
      }

      if (max !== undefined && (parseFloat(value) || 0) > max) {
        return
      }

      setNumber(numberType === 'integer' ? (parseInt(value) || '') : value)
    }
  }

  function handleIncrease() {
    let nextState = numberStep
    if (number) {
      if (!max || (max && (parseFloat(number) + numberStep) <= max)) {
        nextState = parseFloat(number) + numberStep
      } else {
        nextState = max
      }
    }

    if (nextState < numberMin) {
      nextState = numberMin
    }

    setNumber(numberType === 'integer' ? parseInt(nextState) : nextState.toFixed(2))
  }

  function handleDecrease() {
    let nextState = 0
    if (number) {
      if ((parseFloat(number) - numberStep) >= numberMin) {
        nextState = parseFloat(number) - numberStep
      } else {
        nextState = numberMin
      }
    }

    setNumber(numberType === 'integer' ? parseInt(nextState) : nextState.toFixed(2))
  }

  function handleArrow(event) {
    if (event.key === 'ArrowUp') {
      handleIncrease()

    } else if (event.key === 'ArrowDown') {
      handleDecrease()
    }
  }

  return (
    <div className='number-input'>
      <input
        type='text'
        value={ number }
        onChange={ handleChangeInput }
        onKeyDown={ handleArrow }
      />

      <div className='actions flex-box content-center'>
        <i className='action up fa-light fa-sort-up' onClick={ handleIncrease }/>
        <i className='action down fa-light fa-sort-down' onClick={ handleDecrease }/>
      </div>
    </div>
  )
}
