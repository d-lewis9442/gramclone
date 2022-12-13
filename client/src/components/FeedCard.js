import { useEffect, useState } from 'react'

const FeedCard = ({ post, users }) => {
  const [user, setUser] = useState(null)
  // console.log(users)
  console.log(post)

  const getData = () => {
    users.forEach((index) => {
      console.log(index)
      if (index.id === post.userId) setUser(index)
    })
  }
  console.log(user)

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="feed-card">
      <div className="post-header">
        <div className="post-image">
          <img src={user?.image} />
        </div>
        <div>
          <p className="username">{user?.username}</p>
        </div>
      </div>
      <div className="feed-card-image">
        <img src={post.image} alt={post.name} />
      </div>
      <div></div>
    </div>
  )
}

export default FeedCard
