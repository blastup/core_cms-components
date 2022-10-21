import React from 'react'
import { Help } from '../../App'

export default function InputField({ classes, label, help, translatable, children }) {

  return (
    <div className={ `input-field ${ translatable ? 'translatable' : '' } ${ classes || '' }` }>
      { label &&
        <div className='flex-box items-center'>
          <label>
            { label }
          </label>
          { help &&
            <Help text={ help }/>
          }
        </div>
      }
      { children }
    </div>
  )
}
