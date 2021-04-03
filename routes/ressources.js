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

/* GET find by id. */
router.get('/documents/:id', async (req, res, next) => {
  const document = await Documents.findOne({ id: req.params.id});
  if (document == null) res.redirect('/ressources/documents')
    res.render('detailDOC', {document: document});
  
});

module.exports = router;
