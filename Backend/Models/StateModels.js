var mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    state_name: { type: String },
    Country_Code: { type: String },
    State_Code:{type: String}
});

var State = mongoose.model('State', stateSchema);

module.exports = State;
