var mongoose = require('mongoose');

const schema = {
    name: { type: String },
    email: { type: String },
    dob: { type: String },
    username: { type: String },
    password: { type: String },
    Address: { type: String },
    country: { type: String },
    State: { type: String },
    city: { type: String }
}

const info = mongoose.model("NEWCOLS", schema)

module.exports = info;

