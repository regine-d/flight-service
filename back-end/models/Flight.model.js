const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    flightNumber: String,
    departureDate: String,
    arrivalDate: String,
    departureTime: String,
    arrivalTime: String,
    departureAirport: String,
    arrivalAirport: String,
    currNumPassengers: {
        type: Number,
        min: [0, 'Flight cannot have less than zero passengers.'],
        max: [100, 'Flight has a max capacity of 100 passengers.']
    },
    passengerLimit: {
        type: Number,
        default: 100
    }
})

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;