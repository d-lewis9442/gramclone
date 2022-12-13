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
            <p>
              <img src={selectedPost.User.image} className="rounded" />{' '}
              <p className="username">{selectedPost.User.username}</p>
              <p>{selectedPost.body}</p>
            </p>
            <hr
              style={{
                background: 'black',
                height: '1px',
                border: 'none',
                width: '15vw'
              }}
            ></hr>

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
