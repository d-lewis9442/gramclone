const { Post, Comment, User } = require('../models')

const CreatePost = async (req, res) => {
  try {
    let ownerId = parseInt(req.params.user_id)
    let postBody = {
      ownerId,
      ...req.body
    }
    let post = await Post.create(postBody)
    res.send(post)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreatePost
}
