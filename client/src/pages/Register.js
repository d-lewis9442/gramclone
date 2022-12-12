import { useNavigate } from 'react-router-dom'
import { Register } from '../services/Auth'
import { useState } from 'react-router-dom'

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
    await Register({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/')
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
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
