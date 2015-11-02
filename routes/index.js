var express = require('express');
var router = express.Router();
var config = {api_endpoint: 'http://localhost:3000'};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    config: config
  });
});

module.exports = router;
