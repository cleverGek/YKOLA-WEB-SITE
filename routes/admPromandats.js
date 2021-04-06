var express = require('express');
var ProMandats = require('../models/ProMandats');
var router = express.Router();
var multer =  require('multer');

//define storage for image
const storage = multer.diskStorage({

    //destionnation
    destination:function(req, file, collback){
        collback(null, './public/ressources/images');
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

/* GET a amgin ressources pages */
router.get('/addPROMANDATS', function(req, res, next) {
  res.render('addPROMANDATS', { title: 'ykola' });
});

/** post doc */
router.post('/addDOC', upload.single('image'), async function(req, res, next){
    let proMandats =  new ProMandats({
        auteur: req.body.auteur,
        promesse: req.body.auteur,
        date: req.body.auteur,
        contenu: req.body.auteur,
        lieu: req.body.auteur,
        image: req.body.auteur,
        circonstance: req.body.auteur,
        tauxProgress: req.body.auteur
    })

    try {
        proMandats = await proMandats.save()
        res.redirect(`/ressources/${proMandats.id}`)
        console.log('cava');
    } catch (e) {
        console.log(e);
        //res.render('admin/addDOC', {title : 'ykola'});
    }
});

module.exports = router;
