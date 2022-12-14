const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const UserRouter = require('./routes/UserRouter')
const PostRouter = require('./routes/PostRouter')
const AuthRouter = require('./routes/AuthRouter')
const CommentRouter = require('./routes/CommentRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/user', UserRouter)
app.use('/posts', PostRouter)
app.use('/auth', AuthRouter)
app.use('/comment', CommentRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
