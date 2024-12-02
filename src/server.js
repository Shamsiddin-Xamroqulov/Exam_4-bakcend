require('dotenv').config()
const {verify} = require("jsonwebtoken")
const express  = require('express')
const cors = require('cors')
const router = require('./routes')
const fileupload = require("express-fileupload")
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const PORT = 5000
// console.log(verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjYsI…U4M30.fJFqwdBxqTNXLwM1_oca5rkYCqIQHOSbM9ZANwy4iQ4", "token"))

const app = express()

app.use(fileupload())
app.use(express.json())
app.use(cors())
app.use(router)
app.use(errorHandler)


const path = require('path')
// const { verify } = require('crypto')

app.use(express.static(path.join(__dirname, 'static')))
const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
