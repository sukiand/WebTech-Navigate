var express = require('express');
var api = express.Router();
var profiles = require('../controllers/profile_controller.js');
var websites= require('../controllers/website_controller.js');
var qas = require('../controllers/qa_controller.js');

api.get('/websites',websites.getWebsites);
api.get('/tags',websites.getWebTags);
api.get('/profiles',profiles.getProfiles);
api.get('/qas',qas.getQas);

module.exports = api;
