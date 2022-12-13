import FeedCard from './FeedCard'
import { useState, useEffect } from 'react'
import { populateFeed } from '../services/Queries'

const Feed = ({ user }) => {
  const [feed, setFeed] = useState([])
  let posts = []

  const getFeed = async () => {
    if (user) {
      const id = user.id
      const response = await populateFeed(id)
      response.data.following.forEach((index) => {
        index.Posts.forEach((post) => {
          if (post) posts.push(post)
        })
      })
      setFeed(response.data.following)
      console.log(posts)
    }
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <div className="feed-main">
      <p>Test</p>
      <div>
        {posts.length > 0
          ? posts.map((post) => (
              <div>
                <FeedCard post={post} />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default Feed
