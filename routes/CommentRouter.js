const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.post('/:post_id/:user_id', controller.CreateComment)
Router.get('/view/:comment_id', controller.GetCommentDetails)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router
