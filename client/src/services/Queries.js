import Client from './api'

export const getRecents = async () => {
  try {
    const response = await Client.get('/posts/recents')
    return response
  } catch (error) {
    throw error
  }
}
