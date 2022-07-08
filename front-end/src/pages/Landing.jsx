import { Form } from '../components/Form/Form';

export const Landing = () => {
    return (
        <>
            <div id = "landing">
                <div>
                    <h1 id = "ty">THANK YOU FOR <br/> MAKING OUR <br /> FLIGHTS POSSIBLE.</h1>
                    <p id = "slogan">Let’s fly, <br></br><em>in style.</em></p>
                </div>
                <div class = "glass">
                    <Form />
                </div>
            </div>
            
        </>
    )
}