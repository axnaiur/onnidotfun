import express, { Application } from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
import userRoutes from './routes/userRoutes'
import tradeRoutes from './routes/tradeRoutes'
import challengeRoutes from './routes/challengeRoutes'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/trades', tradeRoutes)
app.use('/api/challenges', challengeRoutes)

export default app
