import express from 'express'
import cors from 'cors'
import AppRouter from './Routes/AppRouter'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', AppRouter)
app.get('/health', (req, res) => {
    res.send({ status: 200, message: 'success' })
})

export default app