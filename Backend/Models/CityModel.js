var mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    city_name: { type: String },
    State_Code: { type: String }
});

var city = mongoose.model('City', citySchema);

module.exports = city;