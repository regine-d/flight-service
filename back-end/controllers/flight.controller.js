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

const findAllFlights = async (limit = 0) => {
    const flights = await Flight.find();
    return flights;
}

// const deleteFlightById = async id => {
//     try{
//         const flight = await Flight.findByIdAndRemove(id);
//         if (flight == null) {
//             throw `No flight with the id of ${id} found`
//         }
//         return flight;
//     }
//     catch (err) {
//         console.log(err)
//         throw { status: 404, message: err};
//     }
    

// }

const deleteFlight = async flightNumber => {
    try{
        const flight = await Flight.deleteOne({flightNumber});
        if (flight == null) {
            throw `No flight with the id of ${flightNumber} found`
        }
        return flight;
    }
    catch (err) {
        console.log(err)
        throw { status: 404, message: err};
    }
}

const updateFlight = async (update) => {
    try{
        console.log(update)
        let flight = await Flight.findOneAndUpdate({flightNumber: update.flightNumber}, update, {new:true})
        if (flight == null) {
            throw `No flight with the id of ${flightNumber} found`
        }
        else {
            return flight
        }
    } catch(err) {
        console.log(err)
        throw { status: 404, message: err};
    }
}

// const updateFlight = async (flightNumber, update) => {
//     try{
//         const flight = await Flight.findOneAndUpdate({flightNumber}, {departureAirport: update.departureAirport}, {new: true});
//         if (flight == null) {
//             throw `No flight with the id of ${flightNumber} found`
//         }
//         return flight;
//     }
//     catch (err) {
//         console.log(err)
//         throw { status: 404, message: err};
//     }
// }

module.exports = { createFlight, findFlightById, findAllFlights, deleteFlight, updateFlight}