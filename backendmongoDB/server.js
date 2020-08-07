var express = require('express');
var app = express();
require('dotenv').config();

const Product = require('./Model/Product');


// import mongoose and connect to db
const mongoose = require('mongoose');
const uri = process.env.ATLAS_DB_URI;
const db = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log('now connected to db');  
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`);
})

const product = mongoose.model('Product', Product);

app.get('/create', (req, res, next)=>{
  new product({name : 'Aritra'})
  .save()
  .then(result=>{
    console.log('saved!');
    res.status(200).json(result);
  })
  .catch(error=> {
    console.log(`Some error occurred : ${error}`);
    res.status(404).json(error);
  });
});

app.get('/:id', (req, res, next)=>{
  product.findById(req.params.id)
  .then(result=>{
    console.log('retrieved!');
    res.status(200).json(result);
  })
  .catch(error=> {
    console.log(`Some error occurred : ${error}`);
    res.status(404).json(error);
  });
});

module.exports = app;