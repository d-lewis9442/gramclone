import { useState } from 'react'
import { destroyPost, updatePost } from '../services/Queries'
import CommentCard from './CommentCard'

const ProfileModal = ({
  show,
  setShow,
  selectedPost,
  onClose,
  userInfo,
  user
}) => {
  const initialState = { image: '', body: '' }
  const [toggle, setToggle] = useState(false)
  const [formValues, setFormValues] = useState(initialState)

  if (!show) {
    return null
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = selectedPost.id
    await updatePost(id, {
      image: formValues.image,
      body: formValues.body
    })
    setToggle(!toggle)
    setShow(false)
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
      <div className="modal-div" onClick={(e) => e.stopPropagation()}>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formValues.image}
              name="image"
              type="text"
              placeholder="Image URL"
            ></input>
            <input
              onChange={handleChange}
              value={formValues.body}
              name="body"
              type="text"
              placeholder="Caption"
            ></input>
            <button type="submit">Submit Changes</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
