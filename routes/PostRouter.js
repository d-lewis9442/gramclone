const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/PostController')

router.get('/all', controller.GetPosts)
router.get('/recents', controller.GetRecentPosts)
router.get('/:post_id', controller.GetPostDetails)
router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)

module.exports = router
