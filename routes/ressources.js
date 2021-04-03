var express = require('express');
var Ducuments = require('../models/Document');
var router = express.Router();

/* GET ressources pages. */
router.get('/jeux', function(req, res, next) {
  res.render('jeux', { title: 'ykola' });
});

/* GET ressources pages. */
router.get('/videos', function(req, res, next) {
  res.render('videos', { title: 'ykola' });
});


/* GET find all DOC. */
router.get('/documents', function(req, res, next) {
  res.render('videos', { title: 'ykola' });
});

module.exports = router;
