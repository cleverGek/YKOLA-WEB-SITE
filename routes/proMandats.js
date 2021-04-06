var express = require('express');
var router = express.Router();
var Promandats = require('../models/ProMandats');

/* GET home page. */
router.get('/promandats', async function(req, res, next) {

  const promandats = await Promandats.find().sort({
    id: 'desc'
  })
  res.render('showPROMANDATS', { promandats: promandats});
});

/* GET find by id. */
router.get('/documents/:id', async (req, res, next) => {
  const document = await Documents.findById(req.params.id)
  if (document == null) {
    res.redirect('/ressources/documents')
  }else{
    res.render('detailDOC', {document: document});
  }  
});

module.exports = router;
