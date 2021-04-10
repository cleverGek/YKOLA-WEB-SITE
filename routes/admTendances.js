var express = require('express');
var Politiques = require('../models/Politique');
var Santes = require('../models/Sante');
var Sports = require('../models/Sport');
var Cultures = require('../models/Culture');
var router = express.Router();
var multer = require('multer');

//define storage for image
const storage = multer.diskStorage({

  //destionnation
  destination:function(req, file, collback){
      collback(null, './public/tendances/images');
  },
  //add extension
  filename:function(req, file, collback){
     collback(null, Date.now()+file.originalname);
  }
})

//upload parametres multer

const upload = multer({
  storage:storage,
  limits:{
      fieldSize:1024*1024*3
  }
});

const uploadMultiple = upload.fields([{name: 'image', maxCount: 10}, {name: 'barometre', maxCount: 10}])

/* GET a amgin sante pages */
router.get('/addSANTE', function(req, res, next) {
  res.render('addSANTE', { title: 'ykola' });
});

function reducer(acc, cur){
  return {...acc, [cur.fieldname] : cur}
}

/** post sante */
router.post('/addSANTE', uploadMultiple, async function(req, res, next){

let img = req.files['image'].reduce(reducer, {});
let baro = req.files['barometre'].reduce(reducer, {});

  let Sante =  new Santes({
      titre: req.body.titre,
      vrais: req.body.vrais,
      faux: req.body.faux,
      sommaire: req.body.sommaire,
      image: img.image.filename,
      barometre: baro.barometre.filename
  })
 
  try {
    santes = await Sante.save()
      res.redirect('/tendances/santes')
      console.log('cava');
  } catch (e) {
      console.log(e);
      res.render('admin/addSANTE', {title : 'ykola'});
  }
});

/**fin sante */

/* GET a amgin politque pages */
router.get('/addPOLITIQUE', function(req, res, next) {
  res.render('addPOLITIQUE', { title: 'ykola' });
});

/** post politique */
router.post('/addPOLITIQUE', uploadMultiple, async function(req, res, next){

  let img = req.files['image'].reduce(reducer, {});
  let baro = req.files['barometre'].reduce(reducer, {});
  
    let Politique =  new Politiques({
        titre: req.body.titre,
        vrais: req.body.vrais,
        faux: req.body.faux,
        sommaire: req.body.sommaire,
        image: img.image.filename,
        barometre: baro.barometre.filename
    })
   
    try {
      await Politique.save()
        res.redirect('/tendances/politiques')
        console.log('cava');
    } catch (e) {
        console.log(e);
        res.render('admin/addPOLITIQUE', {title : 'ykola'});
    }
  });
  

/** fin politque */

  /* GET a amgin sport pages */
router.get('/addSPORT', function(req, res, next) {
    res.render('addSPORT', { title: 'ykola' });
  });

/** post sport */
router.post('/addSPORT', uploadMultiple, async function(req, res, next){

  let img = req.files['image'].reduce(reducer, {});
  let baro = req.files['barometre'].reduce(reducer, {});
  
    let Sport =  new Sports({
        titre: req.body.titre,
        vrais: req.body.vrais,
        faux: req.body.faux,
        sommaire: req.body.sommaire,
        image: img.image.filename,
        barometre: baro.barometre.filename
    })
   
    try {
        await Sport.save()
        res.redirect('/tendances/cultures')
        console.log('cava');
    } catch (e) {
        console.log(e);
        res.render('admin/addSPORT', {title : 'ykola'});
    }
  });
  

/**  fin sport */

  /* GET a amgin culture pages */
router.get('/addCULTURE', function(req, res, next) {
    res.render('addCULTURE', { title: 'ykola' });
  });

/** post culture */
router.post('/addCULTURE', uploadMultiple, async function(req, res, next){

  let img = req.files['image'].reduce(reducer, {});
  let baro = req.files['barometre'].reduce(reducer, {});
  
    let Culture =  new Cultures({
        titre: req.body.titre,
        vrais: req.body.vrais,
        faux: req.body.faux,
        sommaire: req.body.sommaire,
        image: img.image.filename,
        barometre: baro.barometre.filename
    })
   
    try {
      await Culture.save()
        res.redirect('/tendances/cultures')
        console.log('cava');
    } catch (e) {
        console.log(e);
        res.render('admin/addCULTURE', {title : 'ykola'});
    }
  });
  

/** fin culture */

module.exports = router;
