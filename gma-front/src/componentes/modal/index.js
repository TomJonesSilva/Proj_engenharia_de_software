import React from 'react'
import { ModalComponent } from './styles'

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
        <ModalComponent>
            <div className='background'>
                <div className='modal'>
                    {children}
                <div>
                    <button onClick={setModalOpen}>Salvar</button>
                </div>
                </div>
            </div>
        </ModalComponent>
    )
  }

  return null
}
