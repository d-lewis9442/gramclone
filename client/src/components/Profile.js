import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { populateFeed } from '../services/Queries'
import ProfileModal from './ProfileModal'

const Profile = ({ user }) => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [show, setShow] = useState(false)
  const [userInfo, setUserInfo] = useState(false)

  let { userId } = useParams()

  const selectPost = (id) => {
    if (userInfo.Posts) {
      const clickPost = userInfo.Posts.find((post) => post.id === id)
      setSelectedPost(clickPost)
      setShow(true)
    }
  }

  const getUserInfo = async () => {
    const response = await populateFeed(userId)
    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [show, userId])

  return (
    <div>
      {userInfo ? (
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
                <div className="stats2">
                  {userInfo.followers.length} Followers
                </div>
                <div className="stats3">
                  {userInfo.following.length} Following
                </div>
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
            setShow={setShow}
            selectedPost={selectedPost}
            userInfo={userInfo}
            user={user}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Profile
