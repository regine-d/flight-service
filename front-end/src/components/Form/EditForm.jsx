import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const EditForm = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef(); 
    const departureTimeRef = useRef(); 
    const arrivalTimeRef = useRef(); 
    const departureAirportRef = useRef(); 
    const arrivalAirportRef = useRef(); 
    const currNumPassengersRef = useRef(); 
    const passengerLimitRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async () => {
            try {
                await axios.put('http://localhost:8085/flights',
                {   
                    flightNumber: flightNumberRef.current.value, 
                    departureDate: departureDateRef.current.value,
                    arrivalDate: arrivalDateRef.current.value,
                    departureTime: departureTimeRef.current.value,
                    arrivalTime: arrivalTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value,
                    arrivalAirport: arrivalAirportRef.current.value,
                    currNumPassengers: currNumPassengersRef.current.value,
                    passengerLimit: passengerLimitRef.current.value
                });
            } catch (error) {
                console.log('Something Went Wrong');
            }
            document.getElementById("MyForm").reset();
        
    }

    return (
        <>
            <form className="MyForm" id = "MyFormE" onSubmit={(event) => {event.preventDefault();
                handleSubmit ()} 
            }>
                    
                <label htmlFor="flightNumber">FLIGHT NO. </label>
                <br></br>
                <input id="flightNumber" type="text" placeholder="FLIGHT NUMBER" ref={flightNumberRef}/>
                <br></br>

                <label htmlFor="departureDate">DEPARTURE DATE</label>
                <br></br>
                    <input id="departureDate" type="date" placeholder="DEPARTURE DATE" ref={departureDateRef}/>
                    <br></br>

                <label htmlFor="arrivalDate">ARRIVAL DATE</label>
                <br></br>
                    <input id="arrivalDate" type="date" placeholder="ARRIVAL DATE" ref={arrivalDateRef}/>
                    <br></br>

                <label htmlFor="departureTime">DEPARTURE TIME</label>
                <br></br>
                    <input id="departureTime" type="text" placeholder="DEPARTURE TIME" ref={departureTimeRef}/>
                    <br></br>

                <label htmlFor="arrivalTime">ARRIVAL TIME</label>
                <br></br>
                    <input id="arrivalTime" type="text" placeholder="ARRIVAL TIME" ref={arrivalTimeRef}/>
                    <br></br>

                <label htmlFor="departureAirport">DEPARTURE AIRPORT</label>
                <br></br>
                    <input id="departureAirport" type="text" placeholder="DEPARTURE AIRPORT" ref={departureAirportRef}/>
                    <br></br>

                <label htmlFor="arrivalAirport">ARRIVAL AIRPORT</label>
                <br></br>
                    <input id="arrivalAirport" type="text" placeholder="ARRIVAL AIRPORT" ref={arrivalAirportRef}/>
                    <br></br>

                <label htmlFor="currNumPassengers">CURRENT NUMBER OF PASSENGERS</label>
                <br></br>
                    <input id="currNumPassengers" type="text" placeholder="CURRENT NUMBER OF PASSENGERS" ref={currNumPassengersRef}/>
                    <br></br>

                <label htmlFor="passengerLimit">PASSENGER LIMIT</label>
                    <br></br>
                    <input id="passengerLimit" type="text" placeholder="PASSENGER LIMIT" ref={passengerLimitRef}/>
                    <br></br>
                
                <input id = "editFlight" type="submit" value="Edit Flight" />
                
            </form>
        </>
    )
}