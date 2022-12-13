const CommentCard = ({ comment }) => {
  console.log(comment)
  return (
    <div key={comment.id}>
      <p>
        <img src={comment.User.image} />
        <p className="username">{comment.User.username}</p>
        <p className="body">{comment.body}</p>
      </p>
    </div>
  )
}

export default CommentCard
