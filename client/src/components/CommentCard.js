const CommentCard = ({ comment }) => {
  return (
    <div key={comment.id} className="comment">
      <div className="post-image">
        <img src={comment.User.image} />
      </div>
      <div>
        <p className="username">{comment.User.username}</p>
      </div>
      <div>
        <p className="body">{comment.body}</p>
      </div>
    </div>
  )
}

export default CommentCard
