import { useEffect, useState } from 'react'

const CommentCard = ({ comment, userInfo }) => {
  const [user, setUser] = useState(null)

  const selectUser = () => {
    if (userInfo) {
      const getUser = userInfo.followers.find(
        (user) => user.id === comment.userId
      )
      setUser(getUser)
    }
  }

  useEffect(() => {
    selectUser()
  }, [user])

  return (
    <div key={comment.id} className="comment">
      <div className="post-image">
        <img src={comment.User ? comment.User?.image : user?.image} />
      </div>
      <div>
        <p className="username">
          {comment.User ? comment.User?.username : user?.username}
        </p>
      </div>
      <div>
        <p className="body">{comment.body}</p>
      </div>
    </div>
  )
}

export default CommentCard
