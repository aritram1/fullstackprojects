//Manage the imports
var express = require('express');
var app = express();
var router = express.Router();

//Use express.json() to parse request body
//app.use(express.json());
//not required

//import mongoose and required model(s)
var mongoose = require('mongoose');
const Product = require('../model/product-model');

//Entry point for the "/product" path
router.get('/', function(req, res, next) {
    console.log('Just for logging');
    next();
});

// Endpoint to create products
var bodyParser = require('body-parser');
app.use(bodyParser.json());

router.post('/create', (req, res, next)=>{
    const prod = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    };
    console.log('Product is-> ' + req.body.name + req.body.name);
    new Product(prod)
    .save()
    .then(result=>{
        console.log('saved!');
        res.status(200).json(result);
    }) 
    .catch(error=> {
        res.status(404).json({
            error: `${error}`,
            msg: 'Some error occurred to create the product'
        });
    });
});

router.get('/:id', (req, res, next)=>{
  const productId = req.params.id;
  console.log('id is' + id);
  product.findById(productId)
  .then(result=>{
    console.log(productId + ' retrieved!');
    res.status(200).json(result);
  })
  .catch(error=> {
    console.log(`Some error occurred : ${error}`);
    res.status(404).json({
        error: error,
        msg: `Some error occurred to retrieve the product with id ${id}`
    });
  });
});

module.exports = router;