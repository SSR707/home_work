import express from 'express'
import morgan from 'morgan'
import db from './db/index.js'
import { authGuard } from './middleware/index.js'
import {
    authRouter,
    commentRouter,
    postRouter,
    userRouter,
} from './routes/index.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authGuard, userRouter)
app.use('/api/v1/posts', authGuard, postRouter)
app.use('/api/v1/comments', authGuard, commentRouter)

app.get('/setup', async (req, res) => {
    try {
        await db.sync({ force: true })
        res.status(200).send('Ok')
    } catch (error) {
        console.log(error)
    }
})

app.use((req, res) => {
    res.status(404).send('Not found')
})

app.use((err, req, res, next) => {
    if (err) return res.status(500).send(err.message)
    res.status(404).send('Not found')
})

export default app
