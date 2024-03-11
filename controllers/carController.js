const Cars = require('../models/carModel');

const handleGetlAllCars = async (req, res) => {
    const allDbCars = await Cars.find({});
    return res.json(allDbCars);
}

const handleCreateCars = async (req, res) => {
    const body = req.body;

    if (!body || !body.name || !body.image || !body.type || !body.seatingCapacity || !body.fuelCapacity || !body.rentPerKm) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const result = await Cars.create({
        name: body.name,
        image: body.image,
        type: body.type,
        seatingCapacity: body.seatingCapacity,
        fuelCapacity: body.fuelCapacity,
        rentPerKm: body.rentPerKm
    })
    return res.status(201).json({ message: 'success', result })
}

const handleUpdateCarById = async (req, res) => {
    const updateCar = async (id, newData) => {
        const updatedCar = await Cars.findByIdAndUpdate(id, newData, { new: true })
        return updatedCar;
    }

    const updatedCar = await updateCar(req.params.id, req.body)

    if (updatedCar) {
        return res.status(200).json({ status: 'success', car: updatedCar })
    }
    else {
        return res.status(404).json({ status: 'error', message: 'Car not found' })
    }
}

const handleGetCarById = async (req, res) => {
    const getCar = await Cars.findById(req.params.id)

    if (getCar) {
        return res.status(200).json({ status: 'success', getCar })
    }
    else {
        return res.status(404).json({ status: 'error', message: 'Car not found' })
    }
}

const handleDeleteCarById = async (req, res) => {
    const deleteCar = await Cars.findByIdAndDelete(req.params.id)

    if (deleteCar) {
        return res.status(200).json({ status: 'success', deletedCar: { deleteCar } })
    }
    else {
        return res.status(404).json({ status: 'error', message: 'Car not found' })
    }
}

module.exports = { handleGetlAllCars, handleCreateCars, handleUpdateCarById, handleDeleteCarById, handleGetCarById }