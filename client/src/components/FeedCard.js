import { useEffect, useState } from 'react'
import { getPostDetails } from '../services/Queries'
import CommentCard from './CommentCard'

const FeedCard = ({ post }) => {
  const [data, setData] = useState(null)

  const postDetails = async () => {
    if (post) {
      const id = post.id
      const response = await getPostDetails(id)
      setData(response.data)
    }
  }

  let comments = data?.Comments

  useEffect(() => {
    postDetails()
  }, [])

  return (
    <div className="feed-card">
      <div className="post-header">
        <div className="post-image">
          <img src={data?.User.image} />
        </div>
        <div>
          <p className="username">{data?.User.username}</p>
        </div>
      </div>
      <div className="feed-card-image">
        <img src={post.image} alt={post.name} />
      </div>
      <div>
        <div className="post-header">
          <p className="username">{data?.User.username}</p>
          <p className="body">{data?.body}</p>
        </div>
        <div>
          {comments?.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedCard
