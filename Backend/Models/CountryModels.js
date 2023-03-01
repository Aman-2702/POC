var mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country_name: { type: String },
    Country_Code: { type: String }
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;