const express = require('express');
const router = express.Router();
const { handleGetlAllCars, handleCreateCars, handleUpdateCarById, handleDeleteCarById, handleGetCarById } = require('../controllers/carController')

const cars = require('../models/carModel');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.get('/', handleGetlAllCars)
router.post('/', handleCreateCars)
router.put('/:id', handleUpdateCarById)
router.delete('/:id', handleDeleteCarById)
router.get('/:id', handleGetCarById)

module.exports = router