var mongoose = require('mongoose');
var websites = require('../models/websites_model.js');

exports.getWebsites = function(req,res,next){
  websites.find()
    .exec(function(err,websites){
      if(!websites){
        res.json(404,'not found');
      }
      else{
        res.json(websites);
      }
    })
}

exports.getOneWebsite= function(req,res,next){
  websites.findOne()
    .exec(function(err,website){
      console.log(website);
      if(!website){
        res.json(404,'not found');
      }
      else{
        res.json(website);
      }
    })
}
