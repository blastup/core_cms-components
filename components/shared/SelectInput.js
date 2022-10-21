import React, { useState, useEffect, useRef, useCallback } from 'react'
import InputField from './InputField'

export default function SelectInput({
  wrapperClasses, label, help, identifier, options, currentOption, setCurrentOption,
  icon, toggledIcon
}) {
  const [toggled, _setToggled] = useState(false)
  const [currentSelectedIndex, _setCurrentSelectedIndex] = useState(null)

  const didMountRef = useRef(false)
  const currentSelectedIndexRef = useRef(currentSelectedIndex)
  const toggledRef = useRef(toggled)

  const selectIdentifier = identifier || 'value'
  const current = options.find( option => option[selectIdentifier] === currentOption )

  useEffect( () => {
    if (didMountRef.current) {
      if (toggledRef.current) {
        document.addEventListener('keydown', handleKeyDown, true)
        document.addEventListener('click', closeMenuWithEvent, true)
        setCurrentSelectedIndex(0)
      }

    } else {
      didMountRef.current = true
    }
  }, [toggled])

  function setToggled(state) {
    _setToggled(state)
    toggledRef.current = state
  }

  function setCurrentSelectedIndex(state) {
    _setCurrentSelectedIndex(state)
    currentSelectedIndexRef.current = state
  }

  function closeMenu() {
    document.removeEventListener('keydown', handleKeyDown, true)
    document.removeEventListener('click', closeMenuWithEvent, true)
    setToggled(false)
    setCurrentSelectedIndex(null)
  }

  const closeMenuWithEvent = useCallback( (event) => {
    if (event && !event.target.classList.contains('select-option')) {
      setToggled(false)
      setCurrentSelectedIndex(null)
    }
  }, [])

  const handleKeyDown = useCallback( (event) => {
    if (toggledRef.current) {
      if (event.key === 'Escape') {
        closeMenu()

      } else if (event.key === 'Enter') {
        if (currentSelectedIndexRef.current !== null) {
          selectOption(options[currentSelectedIndexRef.current])
        }

      } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault()
        let index = null

        if (options.length) {
          if (event.key === 'ArrowUp') {
            if (currentSelectedIndexRef.current !== null && currentSelectedIndexRef.current > 0) {
              index = currentSelectedIndexRef.current - 1
            } else {
              index = options.length - 1
            }

          } else if (event.key === 'ArrowDown') {
            if (currentSelectedIndexRef.current !== null && currentSelectedIndexRef.current < (options.length - 1)) {
              index = currentSelectedIndexRef.current + 1
            } else {
              index = 0
            }
          }
        }

        if (index !== null) {
          setCurrentSelectedIndex(index)
        }
      }
    }
  }, [toggledRef.current])

  function selectOption(option) {
    if (option.onSelect) {
      option.onSelect(option)
    } else {
      setCurrentOption(option)
    }
    closeMenu()
  }

  return (
    <div className='select-input'>
      <InputField
        classes={ wrapperClasses }
        label={ label }
        help={ help }
      >
        <div
          className='input-wrapper'
          onClick={ () => setToggled(!toggled) }
        >
          <input
            type='text'
            value={ currentSelectedIndex ? options[currentSelectedIndex].title : current.title }
            onChange={ () => {} }
          />
          <div className='input-icon'>
            <i className={ `fa-light ${ toggled ? (toggledIcon || 'fa-chevron-up') : (icon || 'fa-chevron-down') }` }/>
          </div>

          { toggled &&
            <div className='select-options-overlay'>
              <div className='select-options'>
                { options.map( (option, index) => (
                  <div
                    key={ `${ option.value }_${ index }` }
                    className={ `select-option ${ currentSelectedIndex === index ? 'selected' : '' }` }
                    onMouseEnter={ () => setCurrentSelectedIndex(index) }
                    onClick={ () => selectOption(option) }
                  >
                    { option.itemRenderer ? option.itemRenderer(option) : option.title }
                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      </InputField>
    </div>
  )
}
