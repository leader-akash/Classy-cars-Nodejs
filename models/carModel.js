const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true   
    },
    carImage:{
        type: String,
        required: true,
    },
    carType:{
        type: String,
        required: true,
    },
    seatingCapacity: {
        type: Number,
        required: true,
    },
    fuelCapacity:{
        type: Number,
        required: true,
    },
    rentPerKm:{
        type: Number,
        required: true,
    }
},  {   timestamps: true    }  
)

const Cars =  mongoose.model('cars', carSchema);

module.exports = Cars