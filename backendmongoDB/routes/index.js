var express = require('express');
var router = express.router();
require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json('Hello!');
});

module.exports = router;
