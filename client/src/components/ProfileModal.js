import { destroyPost } from '../services/Queries'
import CommentCard from './CommentCard'

const ProfileModal = ({
  show,
  setShow,
  selectedPost,
  onClose,
  userInfo,
  user
}) => {
  if (!show) {
    return null
  }

  const handleClick = async () => {
    const id = parseInt(selectedPost.id)
    const deletePost = await destroyPost(id)
    setShow(false)
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
                <img src={userInfo.image} alt={userInfo.username} />
              </div>
              <div>
                <p className="username">{userInfo.username}</p>
              </div>
              <div>
                <p className="body">{selectedPost.body}</p>
              </div>
            </div>
            <hr></hr>
            <div>
              {comments?.map((comment) => (
                <CommentCard
                  key={comment.id}
                  comment={comment}
                  userInfo={userInfo}
                />
              ))}
            </div>
            <div className="post-delete-button">
              {selectedPost.userId === user.id ? (
                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you want to delete this post?'
                      )
                    ) {
                      handleClick()
                    }
                  }}
                >
                  Delete
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProfileModal
