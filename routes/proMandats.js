var express = require('express');
var router = express.Router();
var Promandats = require('../models/ProMandats');

/* GET home page. */
router.get('/promandats', function(req, res, next) {
  res.render('showPROMANDATS', { title: 'ykola' });
});

module.exports = router;
