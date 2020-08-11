// Import and initialize extress, router, utility function(s) and model(s)
const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Product = require('../model/product-model'),
      util = require('../util/util');

/* GET all products */
router.get('/', (req, res, next)=>{
  Product.find()
  .then(result =>{
    var allProducts = util.transform(result);
    res.status(200).json({
        count: allProducts.length,
        data: allProducts
    });
  })
  .catch(error=> {
      res.status(404).json({
          error: `${error}`, 
          msg: 'Some error occurred to fetch all products'
      });
  });
});

module.exports = router;