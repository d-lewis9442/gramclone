import { useState } from 'react'
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
  const [toggle, setToggle] = useState(false)

  if (!show) {
    return null
  }

  const handleClick = async () => {
    const id = parseInt(selectedPost.id)
    const deletePost = await destroyPost(id)
    setShow(false)
  }

  const onClick = async () => {
    setToggle(!toggle)
  }

  console.log(toggle)

  let comments = selectedPost.Comments

  return !toggle ? (
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
                <div>
                  <div className="post-delete-div">
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
                  </div>
                  <div className="post-delete-div">
                    <button
                      onClick={() => {
                        onClick()
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="modal">
      <h1 onClick={() => onClose()} className="modalX">
        X
      </h1>
      <div className="modal-div" onClick={(e) => e.stopPropagation()}></div>
    </div>
  )
}

export default ProfileModal
