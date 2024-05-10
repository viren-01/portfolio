import { createServer } from 'http'
import app from './app'
import axios from 'axios'

const port = 10000
const server = createServer(app)
server.listen(port, () => {
    console.log(`Server running on port ${port}`)

    if (process.env.ENV === 'PROD') {
        //self ping for render
        setInterval(() => {
            let url = `${process.env.HOST}/health`
            axios.get(url).then((res) => {
                console.log("Self Request Made...")
            })
        }, 840000)
    }
})