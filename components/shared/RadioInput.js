import React from 'react'

export default function RadioInput({ identifier, options, currentOption, setCurrentOption }) {
  const identifierKey = identifier || 'key'

  return (
    <>
      { options.map( option => {
        const isCurrent = option[identifierKey] === currentOption

        return (
          <div
            key={ option.key }
            className='radio-input flex-box items-center'
            onClick={ () => setCurrentOption(option) }
          >
            <div className={ `radio ${ isCurrent ? 'selected' : '' } flex-box items-center content-center` }>
              { isCurrent && <div className='radio-filler'/> }
            </div>

            <div className={ `radio-option ${ isCurrent ? 'selected' : '' }` }>
              { option.itemRenderer ? option.itemRenderer(option) : option.title }
            </div>
          </div>
        )
      })}
    </>
  )
}
