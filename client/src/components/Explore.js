import { getRecents } from '../services/Queries'
import { useState, useEffect } from 'react'

const Explore = () => {
  const [posts, setPosts] = useState([])

  const getExplore = async () => {
    const getPosts = await getRecents()
    console.log(getPosts.data)
    setPosts(getPosts.data)
  }

  useEffect(() => {
    getExplore()
  }, [])

  return (
    <div>
      <section className="display-grid">
        {posts.map((post) => (
          <div className="explore-post" key={post.id}>
            <img src={post.image} alt={post.body} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Explore
