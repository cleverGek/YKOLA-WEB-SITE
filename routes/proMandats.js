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
router.get('/promandats/:id', async (req, res, next) => {
  const promandats = await Promandats.findById(req.params.id)
  if (promandats == null) {
    res.redirect('/promandats')
  }else{
    res.render('detailDOC', {promandats: promandats});
  }  
});

module.exports = router;
