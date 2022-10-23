import React from "react"

export default function Button({ value, disabled, className, linkTo, onClick }) {

  return (
    <button type={ 'button' }
            value={ value }
            disabled={ disabled }
            className={`button pointer ${className}`}
            onClick={ onClick }>
            { value }
    </button>
  )
}
