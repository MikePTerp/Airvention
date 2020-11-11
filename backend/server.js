import express from 'express'
import dotenv from 'dotenv'
const PORT = process.env.PORT || 5000

dotenv.config()

const app = express()



app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    )