const { Post, Comment, User } = require('../models')

const CreateComment = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id)
    let userId = parseInt(req.params.user_id)
    let commentBody = {
      postId,
      userId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const GetCommentDetails = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.comment_id)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: commentId },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: 'Deleted comment' })
  } catch (error) {
    throw error
  }
}

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,
  GetCommentDetails,
  UpdateComment,
  DeleteComment,
  GetComments
}
