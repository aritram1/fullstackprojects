//Initialize and use express to create the app
var express = require('express');
var app = express();

// Configure dot-env
require('dotenv').config();

//Configure routers
var indexRouter = require('./routes/index');
var productRouter = require('./routes/index');
var allProductsRouter = require('./routes/index');
app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/products', allProductsRouter);

// import mongoose and connect to db
const Product = require('./Model/Product');
const mongoose = require('mongoose');
const uri = process.env.ATLAS_DB_URI;
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log(`${new Date()} : Connected to db..`);  
});

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`${new Date()} : Server started at ${PORT}`);
})

//Export the app
module.exports = app;