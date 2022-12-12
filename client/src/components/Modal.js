const Modal = (props) => {
  if (!props.show) {
    return null
  }
  console.log(props.selectedPost)

  return (
    <div className="modal">
      <h1 onClick={() => props.onClose()} className="modalX">
        X
      </h1>
      {props.selectedPost ? (
        <div className="modal-content">
          <div className="modal-image">
            <img src={props.selectedPost.image} alt={props.selectedPost.name} />
          </div>
          <div className="modal-info">
            <h1>{props.selectedPost.User.username}</h1>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
