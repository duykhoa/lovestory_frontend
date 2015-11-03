var express = require('express');
var router = express.Router();
var config = require('konfig')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Love Story',
    config: config
  });
});

module.exports = router;
