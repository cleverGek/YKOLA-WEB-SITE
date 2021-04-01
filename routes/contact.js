var express = require('express');
var router = express.Router();

/* GET A contact page */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'ykola' });
});

module.exports = router;
