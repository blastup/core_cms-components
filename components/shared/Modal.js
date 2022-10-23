import React, { useState } from 'react'

export default function Modal({
  visible, closeModal, styles, mode, children, action, actionText, cancelAction,
  cancelActionText, disableAction, showConfirmation, confirmationText, actionIcon,
  cancelActionIcon, wrapperClasses, wrapperStyles, footerLeftActions, footerMiddleActions
}) {
  const [confirmation, setConfirmation] = useState(false)

  return (
    <>
      { visible &&
        <div className='main-modal flex-box content-center items-center'>
          <div className='overlay' onClick={ closeModal }/>
          <div className={ `modal-content flex-box flex-column builderContent ${ mode || 'medium' }` }>
            <div className='modal-body'>
              <div className='close-modal flex-box items-center content-center'
                onClick={ closeModal }
              >
                <i className='fa-light fa-xmark'/>
              </div>
              <div className={ `flex-box flex-column ${ wrapperClasses || '' }` } style={ wrapperStyles || {} }>
                { children }
              </div>
            </div>

            { (action || cancelAction) &&
              <div className='modal-footer flex-box content-end flex-column'>
                { showConfirmation &&
                  <div className='flex-box content-end m-t-10 m-b-10'>
                    <input
                      type='checkbox'
                      className='m-r-10'
                      checked={ confirmation }
                      onChange={ () => setConfirmation(!confirmation) }
                    />
                    { confirmationText }
                  </div>
                }

                <div className='flex-box content-space-between items-center'>
                  { footerLeftActions ? footerLeftActions() : <div className='flex-1'/> }
                  { footerMiddleActions ? footerMiddleActions() : <div className='flex-1'/> }
                  <div className='flex-box flex-1 content-end'>
                    <div className='flex-box items-center content-space-between'>
                      { cancelAction &&
                        <button
                          type='button'
                          className='btn reverted m-r-10 flex-box'
                          onClick={ cancelAction }
                        >
                          { cancelActionIcon &&
                            <i className={ `${ cancelActionIcon } m-r-10` }/>
                          }
                          { cancelActionText || ReactiveCore.translations.cancel }
                        </button>
                      }

                      { action &&
                        <button
                          type='button'
                          className='btn flex-box'
                          onClick={ action }
                          disabled={ disableAction || (showConfirmation && !confirmation) }
                        >
                          { actionIcon &&
                            <i className={ `${ actionIcon } m-r-10` }/>
                          }
                          { actionText || ReactiveCore.translations.save }
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </>
  )
}
