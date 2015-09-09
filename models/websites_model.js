var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WebSchema = new Schema({
});

var websites = mongoose.model('website', WebSchema);
module.exports = websites;
