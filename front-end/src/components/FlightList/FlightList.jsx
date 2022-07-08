import axios from 'axios';
import {useEffect, useState } from 'react';

export const FlightList = () => {

    const [flights, setFlights] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlights(res.data))
    }, [flights])

    const removeFlight = (id) => {
        axios.delete(`http://localhost:8085/flights/${id}`).then(res => { 
            setFlights(flights.filter(flight => id !== flight.id))
        })
        .catch(err => {
        console.log(err);
        });
    }

    const editFlight = (id) => {
        axios.patch(`http://localhost:8085/flights/${id}`).then(res =>  
            setFlights(res => setFlights(res.data))
        )
        .catch(err => {
        console.log(err);
        });
    }

    return (
        <>
            <div className='glassTable' id='flights'>
                <table>
                    <thead>
                        <tr>
                            <th>Flight<br />Number</th>
                            <th>Departure<br />Date</th>
                            <th>Arrival<br />Date</th>
                            <th>Departure<br />Time</th>
                            <th>Arrival<br />Time</th>
                            <th>Departure<br />Airport</th>
                            <th>Arrival<br />Airport</th>
                            <th>Number of<br />Passengers</th>
                            <th>Passenger<br />Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { flights.map((flight, index) => (
                        
                            <>
                            <tr>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.departureDate}</td>
                                <td>{flight.arrivalDate}</td>
                                <td>{flight.departureTime}</td>
                                <td>{flight.arrivalTime}</td>
                                <td>{flight.departureAirport}</td>
                                <td>{flight.arrivalAirport}</td>
                                <td>{flight.currNumPassengers}</td>
                                <td>{flight.passengerLimit}</td>
                                <td><button className='button' onClick={() => removeFlight(flight.flightNumber)}>Delete</button></td>
                            </tr>
                            </>
                        
                        ))}
                
                    </tbody>
                    </table>
                    </div>
                    </>
            )
                        
    

    /*
    return (
        <>
        <div>
            {flights.map((flight, index) => {
                return (
                    <>
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
                        </div> 
                        <button className='button' onClick={() => removeFlight(flight.flightNumber)}>Delete</button>
                    </>
                )
            })}
            
        </div>
        </>
    )
    */
}