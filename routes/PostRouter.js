const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/PostController')

router.get('/:post_id', controller.GetAPost)

router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
