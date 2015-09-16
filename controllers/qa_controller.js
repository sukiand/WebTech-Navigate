var mongoose = require('mongoose');
var qa = require('../models/qa_model.js');

exports.getQas= function(req,res,next){
  qa.find()
    .exec(function(err,qas){
      if(!qas){
        res.json(404,'not found');
      }
      else{
        res.json(qas);
      }
    })
}

