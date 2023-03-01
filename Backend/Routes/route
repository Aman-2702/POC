const express = require('express');
const router = express.Router();

const bodyparser = require('body-parser');

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: true }))

const CountryController = require('../Controller/CountryController');

router.get('/countries', CountryController.getCountries);
router.get('/states/:code', CountryController.getStates);
router.get('/cities/:code', CountryController.getCities);


module.exports = router;
