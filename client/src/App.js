import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import Nav from './components/Nav'
import { populateFeed } from './services/Queries'

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [show, setShow] = useState(false)
  const [userInfo, setUserInfo] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const logOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  const getUserInfo = async () => {
    if (user) {
      let id = user.id
      const response = await populateFeed(id)
      setUserInfo(response.data)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    getUserInfo()
  }, [user])

  return (
    <div className="main-grid">
      <section className="sticky-nav">
        <Nav
          logOut={logOut}
          user={user}
          setShow={setShow}
          userInfo={userInfo}
        />
      </section>
      <section className="home">
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home/*"
            element={<Home user={user} show={show} setShow={setShow} />}
          />
        </Routes>
      </section>
    </div>
  )
}

export default App
