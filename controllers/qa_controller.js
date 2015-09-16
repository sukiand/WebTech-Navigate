var mongoose = require('mongoose');
var qas = require('../models/qa_model.js');

exports.getQas= function(req,res,next){
  qas.find()
    .exec(function(err,qas){
      if(!qas){
        res.json(404,'not found');
      }
      else{
        console.log(qas);
        res.json(qas);
      }
    });
}

