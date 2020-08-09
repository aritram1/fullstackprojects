var express = require('express');
var router = express.router();
var mongoose = require('mongoose');
const Product = require('../Model/Product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var product = mongoose.model('Product', Product);
  product.find()
  .then((result)=>{
    res.status(200).json(`All products : ${result}`);
  })
  .catch(error=>{
    res.status(404).json(error);
  });
  
});

module.exports = router;