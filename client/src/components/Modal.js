const Modal = ({ show, onClose }) => {
  if (show === false) {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-image">Image</div>
        <div className="modal-info">
          Content
          <button onCLick={onClose}>X</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
