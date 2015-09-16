var mongoose = require('mongoose');
var websites = require('../models/websites_model.js');

exports.getWebsites = function(req,res,next){
  websites.aggregate({
    $group: {
      _id: "$category",
      websites: {
        $push: "$$ROOT",
      },
    }
  })
    .exec(function(err,websites){
      if(!websites){
        res.json(404,'not found');
      }
      else{
        console.log(websites);
        res.json(websites);
      }
    });
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
