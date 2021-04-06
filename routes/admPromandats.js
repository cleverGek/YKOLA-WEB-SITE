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
router.post('/addDOC', async function(req, res, next){
    let document =  new Document({
        titre: req.body.titre,
        contenu: req.body.contenu,
        sommaire: req.body.sommaire,
        image: req.body.image,
        date: req.body.date
    })

    try {
        document = await document.save()
        res.redirect(`/ressources/${document.id}`)
        console.log('cava');
    } catch (e) {
        console.log(e);
        //res.render('admin/addDOC', {title : 'ykola'});
    }
});

module.exports = router;
