import { Container, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="blue-background" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='py-3 white-text nav-link'>
          <h3>NL Healthcare Careers</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <NavLink to={"/overview"}>
            <Button className="purple-button">Explore</Button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default NavBar;