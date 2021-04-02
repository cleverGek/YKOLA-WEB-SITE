var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ykola' });
});

/** get ressouces details page */
router.get('/:id', async function(req, res, next){

  const document = await document.findOne({ id: req.params.id });
    if(document == null) res.redirect('/')
      res.render('documentDetails', {titre: 'ykola'});
})

module.exports = router;
