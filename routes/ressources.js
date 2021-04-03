var express = require('express');
var Documents = require('../models/Document');
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
router.get('/documents', async function(req, res, next) {

  const documents = await Documents.find().sort({
    id: 'desc'
  })
  res.render('showDOC', { documents: documents});
});

module.exports = router;
