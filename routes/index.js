var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  res.render('common/menubar/index', { title: 'Express' });
});


router.get('/about', function(req, res, next) {
    res.render('common/menubar/index', { title: 'Express' });
});

router.get('/components/:mod/:page', function(req, res, next) {
  var mod = req.params.mod;
  var page = req.params.page;
  res.render('components/' + mod + '/' + page, { title: 'Express' });
});

// router.get('/angular', function(req, res, next) {
//   res.render('tmp/angular', { title: 'Express' });
// });

module.exports = router;
