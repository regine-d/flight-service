import axios from 'axios';
import { useEffect, useState } from 'react';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data))
    }, [])

    return (
        <>
        <div>
            {flights.map((flight, index) => {
                return (
                    <div key = {flight._id}>
                        <div><strong>Flight Number: </strong>{flight.flightNumber}</div>
                        <div><strong>Departure Date: </strong>{flight.departureDate}</div>
                        <div><strong>Arrival Date: </strong>{flight.arrivalDate}</div>
                        <div><strong>Departure Date: </strong>{flight.departureTime}</div>
                        <div><strong>Arrival Time: </strong>{flight.arrivalTime}</div>
                        <div><strong>Departure Airport: </strong>{flight.departureAirport}</div>
                        <div><strong>Arrival Airport: </strong>{flight.arrivalAirport}</div>
                        <div><strong>Current Number of Passengers: </strong>{flight.currNumPassengers}</div>
                        <div><strong>Passenger Limit: </strong>{flight.passengerLimit}</div>
                        <br></br>
                    </div>
                )
            })}
            
        </div>
        </>
    )
}