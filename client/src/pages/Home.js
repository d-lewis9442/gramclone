import { Route, Routes } from 'react-router-dom'
import Feed from '../components/Feed'
import Explore from '../components/Explore'
import Create from '../components/Create'
import Profile from '../components/Profile'

const Home = ({ user, show, setShow }) => {
  return (
    <div className="home">
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route path="/profile/:userId" element={<Profile user={user} />} />
      </Routes>
      <Create
        onClose={() => setShow(false)}
        show={show}
        user={user}
        setShow={setShow}
      />
    </div>
  )
}

export default Home
