import Client from './api'

export const getRecents = async () => {
  try {
    const response = await Client.get('/posts/recents')
    return response
  } catch (error) {
    throw error
  }
}

export const populateFeed = async (id) => {
  try {
    const response = await Client.get(`/user/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const getPostDetails = async (id) => {
  try {
    const response = await Client.get(`/posts/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const newPost = async (id, data) => {
  try {
    const response = await Client.post(`/posts/${id}`, data)
    return response
  } catch (error) {
    throw error
  }
}
