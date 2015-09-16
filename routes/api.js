var express = require('express');
var router = express.Router();
var websites = require('../controllers/website_controller.js');


router.get('/websites', websites.getWebsites);

module.exports = router;
