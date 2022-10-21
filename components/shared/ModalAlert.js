import React from 'react'
import Modal from './Modal'

export default function ModalAlert({ alert, cancelText, acceptText, onSelect, onClose }) {
  return (
    <Modal
      visible={ true }
      closeModal={ onClose }
      mode='small centered'
      action={ onSelect }
      actionText={ acceptText || ReactiveCore.translations.confirm }
      cancelAction={ onClose }
      cancelActionText={ cancelText || ReactiveCore.translations.cancel }
    >
      <div className='modal-alert flex-box flex-column content-space-around'>
        <div className='flex-box content-center'>
          { alert }
        </div>
      </div>
    </Modal>
  )
}
