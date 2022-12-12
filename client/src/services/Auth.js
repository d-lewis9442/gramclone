import Client from './api'

export const SignInUser = async (data) => {
  try {
    const response = await Client.post('/auth/login', data)
    localStorage.setItem('token', response.data.token)
    return response.data.user
  } catch (error) {
    throw error
  }
}

export const Register = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}
