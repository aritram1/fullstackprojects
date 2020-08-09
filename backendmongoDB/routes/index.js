var express = require('express');
var router = express.router();

// Gets triggered when index url is hit
router.get('/', (req, res, next)=>{
    console.log('Hello World!');
    res.status(200).json('Hello world!');
});
