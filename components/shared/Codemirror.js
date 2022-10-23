import React, { useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import './codemirror.scss'

export default function Codemirror({ value, setValue }) {
  const [codemirror, setCodemirror] = useState(value || '')

  return (
    <CodeMirror
      value={ codemirror }
      options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        autoCursor: true,
        autoScroll: true
      }}
      onChange={ setValue }
    />
  )
}
