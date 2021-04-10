var express = require('express');
var router = express.Router();
var Santes = require('../models/Sante');

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
