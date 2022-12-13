const CommentCard = ({ comment }) => {
  console.log(comment)
  return (
    <div key={comment.id} className="comment">
      <div>
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
