import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Avatar } from '@mui/material';

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">BIG SHITTERS &#128169;</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
            <Nav>
                <Nav.Item className='navItem'>
                    <Avatar />
                </Nav.Item>
                
                <Nav.Item className="navItem">
                    <NavDropdown id="collapsible-nav-dropdown">
                        <NavDropdown.Item >Profile</NavDropdown.Item>
                        <NavDropdown.Item >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar;