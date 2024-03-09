var express = require('express');
var router = express.Router();
var controlAccess= require('../controlAccess');

//Utilisez  ce middleware personnalisé pour tout les routes
 router.use(controlAccess);

/* Les routes pour chaque page */
router.get('/', function(req, res, next) {
  res.render('accueil');
});
router.get('/services', function(req, res, next) {
  res.render('services');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
 

module.exports = router;
