var express = require('express');
var router = express.Router();
var Santes = require('../models/Sante');
var Cultures = require('../models/Culture');
var Sports = require('../models/Sport');
var Politiques = require('../models/Politique');

/* GET SANTE page. */
router.get('/santes', async function(req, res, next) {
  const Sante = await Santes.find().sort({
    id: 'desc'
  });
  res.render('showSANTE', {santes: Sante});
});

/* GET find by id. */
router.get('/santes/:id', async (req, res, next) => {
  const Sante = await Santes.findById(req.params.id)
  if (Sante == null) {
    res.redirect('/santes')
  }else{
    res.render('detailSANTE', {santes: Sante});
  }  
});

/** fin sante */

router.get('/politiques', async function(req, res, next) {
  const Politique = await Politiques.find().sort({
    id: 'desc'
  });
  res.render('showPOLITIQUE', {politiques: Politique});
});

/* GET find by id. */
router.get('/politiques/:id', async (req, res, next) => {
  const Politique = await Politiques.findById(req.params.id)
  if (Politique == null) {
    res.redirect('/politiques')
  }else{
    res.render('detailPOLITIQUE', {politiques: Politique});
  }  
});

/** fin politiques */

router.get('/cultures', async function(req, res, next) {
  const Culture = await Cultures.find().sort({
    id: 'desc'
  });
  res.render('showCULTURE', {cultures: Culture});
});

/* GET find by id. */
router.get('/cultures/:id', async (req, res, next) => {
  const Culture = await Cultures.findById(req.params.id)
  if (Culture == null) {
    res.redirect('/cultures')
  }else{
    res.render('detailCULTURE', {cultures: Culture});
  }  
});

/** fin culture */

//sport

router.get('/sports', async function(req, res, next) {
  const Sport = await Sports.find().sort({
    id: 'desc'
  });
  res.render('showSPORT', {sports: Sport});
});

/* GET find by id. */
router.get('/sports/:id', async (req, res, next) => {
  const Sport = await Sports.findById(req.params.id)
  if (Sport == null) {
    res.redirect('/sports')
  }else{
    res.render('detailSPORT', {sports: Sport});
  }  
});

//fin sport

module.exports = router;
