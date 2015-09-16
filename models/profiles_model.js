var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProfileSchema = new Schema({

});

var profiles = mongoose.model('profile',ProfileSchema);
module.exports = profiles;
