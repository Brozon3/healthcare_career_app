import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="blue-background" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='py-3 white-text'>
          <h3>NL Healthcare Careers</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Career Routes" id="collapsible-nav-dropdown" className='px-3 blue-background'>
              <NavDropdown.Item href="/overview" className='white-text'>
                Overview
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='px-3'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;