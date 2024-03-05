const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true   
    },
    image:{
        type: String,
        required: true,
    },
    type:{
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