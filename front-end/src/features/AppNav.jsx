import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

export const AppNav = () => {
    return (
        <Nav>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights" transitionColor="#0000FF">Flights</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/newFlight">New Flight</NavLink>
                </NavItem>
            </NavSection>
        </Nav>
    );
}