var mongoose = require('mongoose');
var profiles = require('../models/profiles_model.js');

exports.getProfiles = function(req,res,next){
    profiles.find()
        .exec(function(err,profiles){
            if(!profiles){
                res.json(404,'not found');
            }
            else{
                console.log(profiles);
                res.json(profiles);
            }
        })
}
