import React from 'react'
import { Link } from 'react-router-dom'

const Modal = () => {
  return (
    <div className="modalDiv">
    <div className="modal">
      <h3>Modal</h3>
      <Link to="/">
        <button>Close</button>
      </Link>
    </div>
  </div>
  )
}

export default Modal