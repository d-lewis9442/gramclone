import CommentCard from './CommentCard'

const FeedCard = ({ post, users }) => {
  // console.log(users)
  console.log(post.Comments)
  return (
    <div className="feed-card">
      <div></div>
      <div className="feed-card-image">
        <img src={post.image} alt={post.name} />
      </div>
      <div>
        {post.Comments?.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default FeedCard
