import CommentCard from './CommentCard'

const Modal = ({ show, selectedPost, onClose }) => {
  if (!show) {
    return null
  }

  let comments = selectedPost.Comments

  return (
    <div className="modal" onClick={() => onClose()}>
      <h1 onClick={() => onClose()} className="modalX">
        X
      </h1>
      {selectedPost ? (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-image">
            <img src={selectedPost.image} alt={selectedPost.name} />
          </div>
          <div className="modal-info">
            <div className="comment">
              <div className="post-image">
                <img
                  src={selectedPost.User.image}
                  alt={selectedPost.User.username}
                />
              </div>
              <div>
                <p className="username">{selectedPost.User.username}</p>
              </div>
              <div>
                <p className="body">{selectedPost.body}</p>
              </div>
            </div>
            <hr></hr>
            {comments?.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
