var express = require('express');
var Document = require('../models/Document');
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
router.get('/addDOC', function(req, res, next) {
  res.render('addDOC', { title: 'ykola' });
});

/** post doc */
router.post('/addDOC', upload.single('image'), async function(req, res, next){
    console.log(req.file);
    let document =  new Document({
        titre: req.body.titre,
        contenu: req.body.contenu,
        sommaire: req.body.sommaire,
        image: req.files,
        date: req.body.date
    })

    try {
        document = await document.save()
        res.redirect(`/ressources/documents/${document.id}`)
        console.log('cava');
    } catch (e) {
        console.log(e);
        //res.render('admin/addDOC', {title : 'ykola'});
    }
});

module.exports = router;
