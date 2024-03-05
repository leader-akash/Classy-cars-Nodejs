const express = require('express');
const router = express.Router();
const { handleGetlAllCars, handleCreateCars } = require('../controllers/carController')

const cars = require('../models/carModel');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', handleGetlAllCars)
router.post('/', handleCreateCars)

module.exports = router