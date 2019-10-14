
const express = require('express')
const MyMiddleware= require('./my_middleware')
//const ENV=require("../env");//if need
const routes=require("../routes");
var cookieParser = require('cookie-parser')
const app = express()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.set('views', "./templates"  );
app.set('view engine', 'ejs');

app.use(MyMiddleware.consoleLog)
app.use(cookieParser())

app.use('/group', routes.group);
app.use('/word', routes.words);

app.use('*', routes.other);

module.exports=app;