var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ykola' });
});

router.get('/packSouscription', function(req, res, next) {
  res.render('packageForm', {title: 'ykola'})
});

router.get('/compte', function(req, res, next){
  res.render('packageForm', {title: 'ykola'})
})

module.exports = router;
