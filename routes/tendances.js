var express = require('express');
var router = express.Router();

/* GET SANTE page. */
router.get('/sante', function(req, res, next) {
  res.render('showSANTE', { title: 'ykola' });
});

/* GET POLITIQUE page. */
router.get('/politique', function(req, res, next) {
  res.render('showPOLITIQUE', { title: 'ykola' });
});

/* GET SPORT page. */
router.get('/sport', function(req, res, next) {
  res.render('showSPORT', { title: 'ykola' });
});

/* GET CULTURE page. */
router.get('/culture', function(req, res, next) {
  res.render('showCULTURE', { title: 'ykola' });
});

module.exports = router;
