const { User, UserFollower, Post, Comment } = require('../models')

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
      include: [{ all: true, nested: true }]
      // include: [
      //   {
      //     model: User,
      //     as: 'following',
      //     include: [{ model: Post, include: [{ model: Comment }] }]
      //   }
      // ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const FollowUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let followerId = parseInt(req.params.following_id)
    let following = {
      userId,
      followerId
    }
    let follow = await UserFollower.create(following)
    res.send(follow)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers,
  GetUserById,
  FollowUser,
  UpdateUser
}
