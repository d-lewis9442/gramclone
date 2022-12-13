const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetAllUsers)
router.get('/:user_id', controller.GetUserById)
router.post('/:user_id/:following_id', controller.FollowUser)
router.put('/:user_id', controller.UpdateUser)

module.exports = router
