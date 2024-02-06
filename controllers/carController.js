const Cars = require('../models/carModel');

const handleGetlAllCars = async(req, res) => {
    const allDbCars = await Cars.find({});
    return res.json(allDbCars);
}

const handleCreateCars = async(req, res) => {
    const body = req.body;
    
    if(!body || !body.carName || !body.carImage || !body.carType || !body.seatingCapacity || !body.fuelCapacity || !body.rentPerKm ){
        return res.status(400).json({message: 'All fields are required'})
    }

    const result = await Cars.create({
        carName : body.carName,
        carImage: body.carImage,
        carType: body.carType,
        seatingCapacity: body.seatingCapacity,
        fuelCapacity: body.fuelCapacity,
        rentPerKm: body.rentPerKm
    })
    return res.status(201).json({message: 'success', result})
}

module.exports = {handleGetlAllCars, handleCreateCars}