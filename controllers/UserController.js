const { User, Post } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id)
    const user = await User.findByPk(id, {
      include: Post
    })
    res.send(user)
  } catch (error) {}
}

module.exports = {
  GetAllUsers,
  GetUserById
}
