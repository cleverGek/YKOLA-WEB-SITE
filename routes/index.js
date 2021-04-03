var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ykola' });
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'ykola'})
});

router.get('/compte', function(req, res, next){
  res.render('inscription', {title: 'ykola'})
})

module.exports = router;
