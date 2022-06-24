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
    }


    return (
        <>
            <form className="MyForm" onSubmit={handleSubmit} >
                <label htmlFor="flightNumber">Flight Number: </label>
                <input id="flightNumber" type="text" placeholder="Flight Number" ref={flightNumberRef} />
                <br></br>

                <label htmlFor="departureDate">Departure Date:</label>
              
                    <input id="departureDate" type="date" placeholder="Departure Date" ref={departureDateRef} />
                    <br></br>

                <label htmlFor="arrivalDate">Arrival Date:</label>
               
                    <input id="arrivalDate" type="date" placeholder="Arrival Date" ref={arrivalDateRef} />
                    <br></br>

                <label htmlFor="departureTime">Departure Time:</label>
  
                    <input id="departureTime" type="text" placeholder="Departure Time" ref={departureTimeRef} />
                    <br></br>

                <label htmlFor="arrivalTime">Arrival Time:</label>
              
                    <input id="arrivalTime" type="text" placeholder="Arrival Time" ref={arrivalTimeRef} />
                    <br></br>

                <label htmlFor="departureAirport">Departure Airport:</label>
               
                    <input id="departureAirport" type="text" placeholder="Departure Airport" ref={departureAirportRef} />
                    <br></br>

                <label htmlFor="arrivalAirport">Arrival Airport:</label>
        
                    <input id="arrivalAirport" type="text" placeholder="Arrival Airport" ref={arrivalAirportRef} />
                    <br></br>

                <label htmlFor="currNumPassengers">Current Number of Passengers:</label>
             
                    <input id="currNumPassengers" type="text" placeholder="Current Number of Passengers" ref={currNumPassengersRef} />
                    <br></br>

                <label htmlFor="passengerLimit">Passenger Limit:</label>
            
                    <input id="passengerLimit" type="text" placeholder="Passenger Limit" ref={passengerLimitRef} />
                    <br></br>

                <input type="submit" value="Add Flight" />
            </form>
        </>
    )
}