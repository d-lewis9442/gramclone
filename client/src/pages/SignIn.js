import { useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'
import { useState } from 'react'

const SignIn = () => {
  let navigate = useNavigate()
  const initialState = { email: '', password: '' }
  const [formValues, setFromValues] = useState(initialState)

  const handleChange = (e) => {
    setFromValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    // setUser(payload)
    setFromValues(initialState)
    navigate('/home')
  }
  return (
    <div className="sign-in">
      <form onSubmit={onSubmit} className="sign-in-form">
        <h2>Sign In</h2>
        <input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={handleChange}
          value={formValues.password}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          disabled={!formValues.email || !formValues.password}
        >
          Sign In
        </button>
      </form>
      <div>
        <h3>Not a member?</h3>
        <Link to="/register">
          <h3>Sign Up Here</h3>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
