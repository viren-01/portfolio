import { createServer } from 'http'
import app from './app'

const port = 1119
const server = createServer(app)
server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})