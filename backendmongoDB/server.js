//Initialize and use express to create the app
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

//Use middlewares
//express/bodyparser.json() to parse request body
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Configure dot-env
require('dotenv').config();

//Configure routers
var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
//var allProductsRouter = require('./routes/products');
app.use('/', indexRouter);
app.use('/product', productRouter);
//app.use('/products', allProductsRouter);

// import mongoose and connect to db
const mongoose = require('mongoose');
const uri = process.env.ATLAS_DB_URI;
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log(`${new Date()} : Connected to db..`);  
});

app.post('/', function(req, res, next){
  console.log(`from server.js ${req.body.name}`);
});

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`${new Date()} : Server started at ${PORT}`);
})

//Export the app
module.exports = app;