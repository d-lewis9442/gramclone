import CommentCard from './CommentCard'

const Modal = ({ show, selectedPost, onClose }) => {
  if (!show) {
    return null
  }

  let comments = selectedPost.Comments
  console.log(selectedPost)

  return (
    <div className="modal">
      <h1 onClick={() => onClose()} className="modalX">
        X
      </h1>
      {selectedPost ? (
        <div className="modal-content">
          <div className="modal-image">
            <img src={selectedPost.image} alt={selectedPost.name} />
          </div>
          <div className="modal-info">
            <div className="comment">
              <div>
                <img src={selectedPost.User.image} className="rounded" />
              </div>
              <div>
                <p className="username">{selectedPost.User.username}</p>
              </div>
              <div>
                <p className="body">{selectedPost.body}</p>
              </div>
            </div>
            <hr></hr>
            {comments
              ? comments.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))
              : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
