var express = require('express');
var router = express.Router();
var config = require('konfig')();

/* GET home page. */
router.get('/', function(req, res, next) {
  jwt_token = req.param('jwt_token');

  res.render('index', {
    title: 'Love Story',
    config: config,
    jwt_token: jwt_token
  });
});

module.exports = router;
