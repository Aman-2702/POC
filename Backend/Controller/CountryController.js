const Country = require('../Models/CountryModels');
const state = require('../Models/StateModels')
const city = require('../Models/CityModel')

exports.getCountries = async function (req, res) {
    const countries = await Country.find({});
    res.send({ success: true, msg: 'Countries Data', data: countries })
}

exports.getStates = async (req, res) => {
    const states = await state.find({ Country_Code: req.params.code });
    res.send({ success: true, msg: 'State Data', data: states })
}

exports.getCities = async (req, res) => {
    const cities = await city.find({ State_Code: req.params.code });
    res.send({ success: true, msg: 'Cities Data', data: cities })
}

