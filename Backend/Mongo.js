const country = require('country-state-city').Country
const state = require('country-state-city').State
const city = require('country-state-city').City

let mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/addressDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => { console.log('Database connected',info()) },
    err => { console.log(err) }
)

const Country = mongoose.model('Country', {
    country_name: { type: String },
    Country_Code: { type: String }
});

let countries = country.getAllCountries();
// Function call
for (let i = 0; i < countries.length; i++) {
    Country.insertMany([
        { country_name: countries[i].name, Country_Code: countries[i].isoCode}
    ]).then(function () {
            console.log("Country inserted")  // Success
        }).catch(function (error) {
            console.log(error)      // Failure
        });
}

//State model
const State = mongoose.model('State', {
    state_name: { type: String },
    Country_Code: { type: String },
    State_Code: { type: String }
});

let states = state.getAllStates();
// Function call
for (let i = 0; i < states.length; i++) {
    State.insertMany([
        {state_name: states[i].name, Country_Code: states[i].countryCode , State_Code: states[i].isoCode}
    ]).then(function () {
            console.log("States inserted")  // Success
        }).catch(function (error) {
            console.log(error)      // Failure
        });
}

//City model
const City = mongoose.model('City', {
    city_name: { type: String },
    State_Code: { type: String },
    country_code: { type: String }
});

let cities = city.getAllCities();
// Function call
for (let i = 0; i < cities.length; i++) {
    City.insertMany([
        { city_name: cities[i].name, State_Code: cities[i].stateCode, country_code: cities[i].countryCode }
    ]).then(function () {
        console.log("All City inserted")  // Success
    }).catch(function (error) {
        console.log(error)      // Failure
    });
}