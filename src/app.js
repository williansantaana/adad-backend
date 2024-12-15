import express from 'express'
import cors from "cors"
import users from './routes/usersRoutes.js'
import books from './routes/booksRoutes.js'
import libraries from './routes/bookstoresRoutes.js'
import comments from './routes/commentsRoutes.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/users', users)
app.use('/books', books)
app.use('/bookstores', libraries)
app.use('/comments', comments)

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})