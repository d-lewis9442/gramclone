import Feed from '../components/Feed'
import { Route, Routes } from 'react-router-dom'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <div className="feed">
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  )
}

export default Home
