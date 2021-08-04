var express = require('express');
var router = express.Router();

/* GET url page */
router.get('/', function(req, res, next) {
  res.render('url', { title: 'ykola' });
});

module.exports = router;
