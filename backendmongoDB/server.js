//Initialize and use express to create the app
const express = require('express'),
      app = express(), 
      cors = require('cors'),
      util = require('./util/util');
// Configure dot-env
require('dotenv').config();

//Use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Entry point logger
//This logs out every request sent to the server
app.use(function(req, res, next){
  util.log(req);
  next();
});

//Configure all routers
app.use('/', require('./routes/index'));
app.use('/product', require('./routes/product'));
app.use('/products', require('./routes/products'));

// import mongoose and connect to db
const mongoose = require('mongoose');
const uname = process.env.DB_USERNAME;
const pwd = process.env.DB_PWD;
const clusterurl = process.env.DB_CLUSTERURL;
const authmechanism = process.env.DB_AUTHMECHANISM;   

const uri = process.env.ATLAS_DB_URI
                      .replace('[DB_USERNAME]', uname)
                      .replace('[DB_PWD]', pwd)
                      .replace('[DB_CLUSTERURL]', clusterurl)
                      .replace('[DB_AUTHMECHANISM]', authmechanism);   
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
  if(!err) console.log(`${new Date()} : Connected to db..`);  
  else console.log(`$Error while connecting : ${err}`);  
});

//Start the server   
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{   
  console.log(`${new Date()} : Server started at ${PORT}`);
})

//Export the app
module.exports = app;