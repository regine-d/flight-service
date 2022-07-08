import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';
import volaraLogo from '../volaraIconWhiteC.png';
import logo from '../logoWhiteC.png'

export const AppNav = () => {
    return (
        <Nav>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/"><img id = "nav-logo" src = {volaraLogo} alt ='logo'/></NavLink>
                </NavItem>  
            </NavSection>

            <NavSection jc="center">
                <NavItem>
                    <img id = "nav-logo-text" src={logo} alt='logo'/>
                </NavItem> 
                {/* 
                <NavItem>
                    <NavLink to="/newFlight">New Flight</NavLink>
                </NavItem>
                */}
            </NavSection>

            <NavSection jc="flex-end">
                <NavItem>
                    <NavLink className='navLink' to="/flights">VIEW FLIGHTS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='navLink' to="/editflight">EDIT FLIGHTS</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}