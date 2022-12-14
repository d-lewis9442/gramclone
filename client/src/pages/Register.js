import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import { useState } from 'react'

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <h2>Register</h2>
        <input
          onChange={handleChange}
          value={formValues.username}
          name="username"
          type="text"
          placeholder="User Name"
          required
        />
        <input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="text"
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
        <input
          onChange={handleChange}
          value={formValues.confirmPassword}
          name="passwordConfirm"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button
          disabled={
            !formValues.email ||
            (!formValues.password &&
              formValues.confirmPassword === formValues.password)
          }
          type="submit"
        >
          Join
        </button>
      </form>
    </div>
  )
}

export default Register
