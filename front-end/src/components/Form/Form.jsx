import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Form = () => {

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currNumPassengersRef.current.value < passengerLimitRef.current.value) {
            try {
                await axios.post('http://localhost:8085/flights',
                {   flightNumber: flightNumberRef.current.value, 
                    departureDate: departureDateRef.current.value,
                    arrivalDate: arrivalDateRef.current.value,
                    departureTime: departureTimeRef.current.value,
                    arrivalTime: arrivalTimeRef.current.value,
                    departureAirport: departureAirportRef.current.value,
                    arrivalAirport: arrivalAirportRef.current.value,
                    currNumPassengers: currNumPassengersRef.current.value,
                    passengerLimit: passengerLimitRef.current.value,
                });
                navigate('../', {replace: true});
            } catch (error) {
                console.log('Something Went Wrong');
            }
            document.getElementById("MyForm").reset();
        } else {
            alert('Too many passengers');
        }
        
    }

    return (
        <>
            <form className="MyForm" id = "MyForm" onSubmit={handleSubmit} >
                <label htmlFor="flightNumber">FLIGHT NO. </label>
                <br></br>
                <input id="flightNumber" type="text" placeholder="FLIGHT NUMBER" ref={flightNumberRef} required/>
                <br></br>

                <label htmlFor="departureDate">DEPARTURE DATE</label>
                <br></br>
                    <input id="departureDate" type="date" placeholder="DEPARTURE DATE" ref={departureDateRef} required/>
                    <br></br>

                <label htmlFor="arrivalDate">ARRIVAL DATE</label>
                <br></br>
                    <input id="arrivalDate" type="date" placeholder="ARRIVAL DATE" ref={arrivalDateRef} required/>
                    <br></br>

                <label htmlFor="departureTime">DEPARTURE TIME</label>
                <br></br>
                    <input id="departureTime" type="text" placeholder="DEPARTURE TIME" ref={departureTimeRef} required/>
                    <br></br>

                <label htmlFor="arrivalTime">ARRIVAL TIME</label>
                <br></br>
                    <input id="arrivalTime" type="text" placeholder="ARRIVAL TIME" ref={arrivalTimeRef} required/>
                    <br></br>

                <label htmlFor="departureAirport">DEPARTURE AIRPORT</label>
                <br></br>
                    <input id="departureAirport" type="text" placeholder="DEPARTURE AIRPORT" ref={departureAirportRef} required/>
                    <br></br>

                <label htmlFor="arrivalAirport">ARRIVAL AIRPORT</label>
                <br></br>
                    <input id="arrivalAirport" type="text" placeholder="ARRIVAL AIRPORT" ref={arrivalAirportRef} required/>
                    <br></br>

                <label htmlFor="currNumPassengers">CURRENT NUMBER OF PASSENGERS</label>
                <br></br>
                    <input id="currNumPassengers" type="text" placeholder="CURRENT NUMBER OF PASSENGERS" ref={currNumPassengersRef} required/>
                    <br></br>

                <label htmlFor="passengerLimit">PASSENGER LIMIT</label>
                    <br></br>
                    <input id="passengerLimit" type="text" placeholder="PASSENGER LIMIT" ref={passengerLimitRef} required/>
                    <br></br>
                
                <input id = "addFlight" type="submit" value="Add Flight" />
                
            </form>
        </>
    )
}