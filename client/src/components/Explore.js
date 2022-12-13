import { getRecents } from '../services/Queries'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Explore = () => {
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  const getExplore = async () => {
    const posts = await getRecents()
    setPosts(posts.data)
  }

  console.log(posts)

  useEffect(() => {
    getExplore()
  }, [])

  const selectPost = (id) => {
    if (posts) {
      const clickPost = posts.find((post) => post.id === id)
      setSelectedPost(clickPost)
      setShow(true)
    }
  }

  return (
    <div>
      <section className="display-grid">
        {posts
          ? posts.map((post) => (
              <div
                className="explore-post"
                key={post.id}
                onClick={() => selectPost(post.id)}
              >
                <img src={post.image} alt={post.body} />
              </div>
            ))
          : null}
      </section>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        selectedPost={selectedPost}
      />
    </div>
  )
}

export default Explore
