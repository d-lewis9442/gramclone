import { useState, useEffect } from 'react'
import { populateFeed } from '../services/Queries'
import { useNavigate } from 'react-router-dom'
import FeedCard from './FeedCard'

const Feed = ({ user }) => {
  const [feed, setFeed] = useState(null)
  const [users, setUsers] = useState(null)
  let navigate = useNavigate()

  const getFeed = async () => {
    if (user) {
      const id = user.id
      const response = await populateFeed(id)
      const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5)
      }
      let posts = []
      response.data.following.forEach((index) => {
        index.Posts.forEach((post) => {
          if (post) posts.push(post)
        })
        shuffle(posts)
      })

      setUsers(response.data.following)
      setFeed(posts)
    }
  }

  const viewProfile = (id) => {
    navigate(`/home/profile/${id}`)
  }

  useEffect(() => {
    getFeed()
  }, [])

  return (
    <div className="feed-main">
      <div>
        {feed?.map((post) => (
          <FeedCard
            key={post.id}
            post={post}
            users={users}
            onClick={viewProfile}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed
