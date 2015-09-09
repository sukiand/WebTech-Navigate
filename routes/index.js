var express = require('express');
var router = express.Router();
var websites = require('../controllers/website_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/angular');
});

router.get('/index', function(req, res, next) {
  res.render('common/menubar/index', { title: 'Express' });
});

router.get('/websites', websites.getWebsites);

router.get('/angular', function(req, res, next) {
  res.render('tmp/angular', { title: 'Express' });
});

module.exports = router;
