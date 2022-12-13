const { Post, Comment, User } = require('../models')

const GetRecentPosts = async (req, res) => {
  try {
    const recents = await Post.findAll({
      include: [{ all: true, nested: true }],
      order: [['createdAt', 'DESC']]
    })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const GetPostDetails = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.post_id, {
      include: Comment
    })
    res.send(post)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let postBody = {
      userId,
      ...req.body
    }
    let post = await Post.create(postBody)
    res.send(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    await Post.destroy({ where: { id: postId } })
    res.send({ message: 'Deleted post' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreatePost,
  GetPostDetails,
  GetRecentPosts,
  UpdatePost,
  DeletePost
}
