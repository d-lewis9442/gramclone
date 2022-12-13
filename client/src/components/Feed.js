import { useState, useEffect } from 'react'
import { populateFeed } from '../services/Queries'
import FeedCard from './FeedCard'

const Feed = ({ user }) => {
  const [feed, setFeed] = useState(null)
  const [users, setUsers] = useState(null)

  const getFeed = async () => {
    if (user) {
      const id = user.id
      const response = await populateFeed(id)
      let posts = []
      response.data.following.forEach((index) => {
        index.Posts.forEach((post) => {
          if (post) posts.push(post)
        })
      })
      setUsers(response.data.following)
      setFeed(posts)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <div className="feed-main">
      <div>
        {feed?.map((post) => (
          <FeedCard post={post} users={users} />
        ))}
      </div>
    </div>
  )
}

export default Feed
