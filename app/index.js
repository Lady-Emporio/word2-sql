
const express = require('express')
const MyMiddleware= require('./my_middleware')

const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(MyMiddleware.consoleLog)

module.exports=app;