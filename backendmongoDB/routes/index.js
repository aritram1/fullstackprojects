var express = require('express');

//initialize the router
var router = express.Router();

//import mongoose and required model(s)
const mongoose = require('mongoose');
const Product = require('../model/product-model')

//import util functions for usage
const util = require('../util/util')

// Gets triggered when index (/) url is hit
router.get('/', (req, res, next)=>{
    Product.find()
    .then(result =>{
        data = [];
        if(result.length > 0){
            for(each of result){
                data.push(util.transform(each));
            }
        }
        res.status(200).json({
            count: result.length,
            data: data
        });
    })
    .catch(error=> {
        res.status(404).json({
            error: `${error}`,
            msg: 'Some error occurred to fetch all products'
        });
    });
});

router.post('/', (req, res, next)=>{
    console.log(`req body-> ${req.body.name}`);
    res.json(req.body);
});

// export the router
module.exports = router;