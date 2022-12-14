import { useState } from 'react'
import ProfileModal from './ProfileModal'

const Profile = ({ userInfo }) => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [show, setShow] = useState(false)
  console.log(selectedPost)
  console.log(userInfo)

  const selectPost = (id) => {
    if (userInfo.Posts) {
      const clickPost = userInfo.Posts.find((post) => post.id === id)
      console.log(clickPost)
      setSelectedPost(clickPost)
      setShow(true)
    }
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-img-wrapper">
          <img src={userInfo.image} alt={userInfo.username} />
        </div>
        <div>
          <div>
            <p className="profile-username">{userInfo.username}</p>
          </div>
          <div className="stats">
            <div className="stats1">{userInfo.Posts.length} Posts</div>
            <div className="stats2">{userInfo.followers.length} Followers</div>
            <div className="stats3">{userInfo.following.length} Following</div>
          </div>
        </div>
      </div>
      <div className="profile-feed">
        {userInfo.Posts?.map((post) => (
          <div
            className="explore-post"
            key={post.id}
            onClick={() => selectPost(post.id)}
          >
            <img src={post.image} alt={post.body} />
          </div>
        ))}
      </div>
      <ProfileModal
        onClose={() => setShow(false)}
        show={show}
        selectedPost={selectedPost}
        userInfo={userInfo}
      />
    </div>
  )
}

export default Profile
