import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  let navigate = useNavigate()
  const [user, setUser] = useState(null)

  console.log(user)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const logOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="main-grid">
      <section className="sticky-nav">
        <Nav logOut={logOut} user={user} />
      </section>
      <section className="home">
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
