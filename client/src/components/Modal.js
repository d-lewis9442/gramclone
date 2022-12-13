import CommentCard from './CommentCard'

const Modal = ({ show, selectedPost, onClose }) => {
  if (!show) {
    return null
  }

  let comments = selectedPost.Comments
  console.log(comments)

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
            <h4>{selectedPost.User.username}</h4>
            <hr
              style={{
                background: 'black',
                height: '1px',
                border: 'none',
                width: '15vw'
              }}
            ></hr>
          </div>
          <div>
            {comments
              ? comments.forEach((comment) => {
                  ;<CommentCard />
                })
              : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Modal
