const express = require('express');
const router = express.Router();
const { handleGetlAllCars, handleCreateCars } = require('../controllers/carController')

router.get('/', handleGetlAllCars)
router.post('/', handleCreateCars)

module.exports = router