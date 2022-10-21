import React, { useCallback } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import CharacterCount from '@tiptap/extension-character-count'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Dropcursor from '@tiptap/extension-dropcursor'

function MenuBar({ editor }) {

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  Link.configure({
    linkOnPaste: false,
    openOnClick: false
  })

  if (editor) {
    return (
      <div className='text-editor-menu'>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleBold().run()
          }}
          className={ `editor-button ${ editor.isActive('bold') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-bold"></i>
        </button>

        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleItalic().run()
          }}
          className={ `editor-button ${ editor.isActive('italic') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-italic"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleUnderline().run()
          }}
          className={ `editor-button ${ editor.isActive('underline') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-underline"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleStrike().run()
          }}
          className={ `editor-button ${ editor.isActive('strike') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-strikethrough"></i>
        </button>
        <button className='editor-button'>
          <input
            type="color"
            onInput={ event => editor.chain().focus().setColor(event.target.value).run() }
            value={ editor.getAttributes('textStyle').color || '#000000' }
          />
        </button>

        <button className='editor-button spacer'></button>

        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleBulletList().run()
          }}
          className={ `editor-button bullet-list ${ editor.isActive('bulletList') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-list"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleOrderedList().run()
          }}
          className={ `editor-button numbered-list ${ editor.isActive('orderedList') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-list-ol"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleBlockquote().run()
          }}
          className={ `editor-button ${ editor.isActive('blockquote') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-block-quote"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().setHardBreak().run()
          }}
          className='editor-button'
        >
          <div>BR</div>
        </button>

        <button className='editor-button spacer'></button>

        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().setTextAlign('left').run()
          }}
          className={ `editor-button ${ editor.isActive({ textAlign: 'left' }) ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-align-left"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().setTextAlign('center').run()
          }}
          className={ `editor-button ${ editor.isActive({ textAlign: 'center' }) ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-align-center"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().setTextAlign('right').run()
          }}
          className={ `editor-button ${ editor.isActive({ textAlign: 'right' }) ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-align-right"></i>
        </button>
        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().setTextAlign('justify').run()
          }}
          className={ `editor-button ${ editor.isActive({ textAlign: 'justify' }) ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-align-justify"></i>
        </button>

        <button className='editor-button spacer'></button>

        <button
          onClick={ event => {
            event.preventDefault()
            editor.chain().focus().toggleCode().run()
          }}
          className={ `editor-button ${ editor.isActive('code') ? 'is-active' : '' }` }
        >
          <i className="fa-light fa-code-simple"></i>
        </button>

        <button onClick={setLink} className={ `editor-button ${ editor.isActive('link') ? 'is-active' : '' }` }>
          <i className="fa-light fa-link-simple"></i>
        </button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive('link')}
          className='editor-button'
        >
          <i className="fa-light fa-link-simple-slash"></i>
        </button>

        <button className='editor-button spacer'></button>

        <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} className='editor-button'>
          <i className="fa-light fa-rotate-left"></i>
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} className='editor-button'>
          <i className="fa-light fa-rotate-right"></i>
        </button>

      </div>
    )
  } else {
    return null
  }
}

export default function TextEditor({ content, setContent, disabled, translatable, setWordCount }) {
  const textEditor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CharacterCount.configure(),
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['paragraph', 'blockquote'],
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setContent(html)

      if (setWordCount) {
        setWordCount(editor.storage.characterCount.words())
      }
    },
    editable: !disabled
  })

  return (
    <div className={ `text-editor ${ translatable ? 'translatable' : '' }` }>
      { !disabled && <MenuBar editor={ textEditor }/> }
      <EditorContent
        editor={ textEditor }
        className='text-editor-content'
      />
      { textEditor &&
        <div className="character-count m-t-5">
          <div className='m-r-5'>{ textEditor.storage.characterCount.characters() } characters</div>
          /
          <div className='m-l-5'>{ textEditor.storage.characterCount.words() } words</div>
        </div>
      }
    </div>
  )
}
