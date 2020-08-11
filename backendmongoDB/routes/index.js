// Import and initialize extress, router, utility function(s) and model(s)
const express = require('express'),
      router = express.Router();
      //mongoose = require('mongoose'),
      //Product = require('../model/product-model'),
      //util = require('../util/util');

// Gets triggered when index (/) url is hit
router.get('/', (req, res, next)=>{
    //res.render(path.join(__dirname, 'views/index.ejd')); //TBD
    res.json({
        message : 'You are at index page'
    });
});

// export the router
module.exports = router;