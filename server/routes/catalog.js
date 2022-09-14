var express = require('express');
var router = express.Router();

var catalog = require('../db/catalog.json')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(catalog);
});

module.exports = router;
