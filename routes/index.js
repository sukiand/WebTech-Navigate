var express = require('express');
var router = express.Router();
var config = require('../config.js')
var serverNo = config.server.No;

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.redirect('/');
});

router.get('/', function(req, res, next) {
    res.render('common/menubar/index', { title: 'Web Hotpot' ,server: serverNo});
});


router.get('/about', function(req, res, next) {
    res.render('common/menubar/index', { title: 'Web Hotpot'+'/about' ,server: serverNo});
    // res.render('common/menubar/index', { title: 'Web Hotpot' });
});

router.get('/qa', function(req, res, next) {
    res.render('common/menubar/index', { title: 'Web Hotpot'+'/qa' ,port: serverNo});
    // res.render('common/menubar/index', { title: 'Web Hotpot' });
});

router.get('/test', function(req, res, next) {
    res.json(req.app.locals.settings.port);
});

router.get('/components/:mod/:page', function(req, res, next) {
  var mod = req.params.mod;
  var page = req.params.page;
  res.render('components/' + mod + '/' + page, { title: 'Web Hotpot/'+mod });
});

// router.get('/angular', function(req, res, next) {
//   res.render('tmp/angular', { title: 'Express' });
// });

module.exports = router;
