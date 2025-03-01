import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Model = () => {
  const {isModal , closeModal} = useGlobalContext();
  return (
    <div className='modal-overlay'>
      <div className="modal-container">
        <h3>modal content </h3>
        <button className='close-modal-btn' onClick={closeModal}><FaTimes/></button>
      </div>
    </div>
  )
}

export default Model