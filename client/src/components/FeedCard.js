const FeedCard = ({ post }) => {
  console.log(post)
  return (
    <div>
      <div>
        <p>Feed Card</p>
        <img src={post.image} alt={post.name} />
      </div>
    </div>
  )
}

export default FeedCard
