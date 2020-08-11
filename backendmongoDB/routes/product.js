// Import and initialize extress, router, utility function(s) and model(s)
const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      Product = require('../model/product-model'),
      util = require('../util/util');

// Crete new product
router.post('/create', (req, res, next)=>{
    console.log(`Request name and price are ${req.body.name} and Price is ${req.body.price}`);
    if(req.body.name != undefined &&  req.body.price != undefined && req.body.price >= 0){
        const prod = {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price   
        };
        new Product(prod).save()
        .then(result=>{
            res.status(200).json(util.transformSingle(result));
        }) 
        .catch(error=> {
            res.status(404).json({
                message: 'Can not save the record',
                error: error.message  
            });
        });
    }
    else{
        res.status(404).json('Name and Price both are required and price can not be negative');
    }
});

//Get details of the product with product id
router.get('/:id', (req, res, next)=>{
    const productId = req.params.id;
    console.log('id is' + productId);
    Product.findById(productId)
    .then(result=>{
        console.log(productId + ' retrieved!');
        res.status(200).json(util.transformSingle(result));
    })
    .catch(error=> {
        res.status(404).json({
            error: error,
            msg: `Some error occurred to retrieve the product with id ${productId}`
        }); 
    });
});

//Delete a product with product productId
router.delete('/:id', (req, res, next)=>{
    const productId = req.params.id;
    console.log('id is' + productId);
    Product.deleteOne(productId)
    .then(result=>{
        res.status(200).json(result); 
    })
    .catch(error=> {
        res.status(404).json({
            error: error,
            msg: `Some error occurred to delete the product with id ${productId}`
        }); 
    });
});

module.exports = router;