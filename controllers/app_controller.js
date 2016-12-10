var models  = require('../models');
var express = require('express');
var router  = express.Router();

//main page will be in handlebars pages/dashboard
router.get('/', function(req, res) {
  res.redirect('/users');
});

router.get('/signin', function(req, res) {
  res.redirect('/users/signin');
});

module.exports = router;