const express = require("express");
const connectDb = require("./config/database");
const { categoryService } = require("./services/categoryService");
const app = express();

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectDb();

const categoryRouter = require('./routes/categoryRouter')

app.use('/category', categoryRouter);




app.listen(8080);