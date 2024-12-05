import app from './src/app.js'
import { config } from 'dotenv'
config()
const startApp = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT} started ...`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()
