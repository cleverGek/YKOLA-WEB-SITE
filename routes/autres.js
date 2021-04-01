var express = require('express');
var router = express.Router();

/* GET A propos page */
router.get('/Apropos', function(req, res, next) {
  res.render('appropos', { title: 'ykola' });
});

module.exports = router;
