const Flight = require('../models/Flight.model')

const createFlight = async ({flightNumber, departureDate, arrivalDate, departureTime, arrivalTime, departureAirport, arrivalAirport, currNumPassengers, passengerLimit}) => {
    try {
        const flight = new Flight({
            flightNumber,
            departureDate,
            arrivalDate,
            departureTime,
            arrivalTime,
            departureAirport,
            arrivalAirport,
            currNumPassengers,
            passengerLimit
        });
        await flight.save()

        return flight._id;
    }
    catch (err) {
        console.log(err)
        throw {status: 400, message: err }
    }
}

const findFlightById = async id => {
    try {
        const flight = await Flight.findById(id);
        if (flight == null) {
            throw `No flight with the id of ${id} found`
        }
        return flight;
    }
    catch (err) {
        console.log(err)
        throw { status: 404, message: err};
    }
}

const findAllFlights = async (limit=0) => {
    const flights = await Flight.find();
    return flights;
}

module.exports = { createFlight, findFlightById, findAllFlights}