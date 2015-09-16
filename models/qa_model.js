var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QaSchema = new Schema({

});

var qas = mongoose.model('qa',QaSchema);
module.exports = qas;
