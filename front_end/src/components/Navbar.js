import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  
  return (
    <Navbar collapseOnSelect expand="lg" className="blue-background">
      <Container>
        <Navbar.Text className='py-3 white-text'>
          <h3>Healthcare Careers</h3>
        </Navbar.Text>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Career Routes" id="collapsible-nav-dropdown" className='px-3 blue-background'>
              <NavDropdown.Item href="#action/3.1" className='white-text'>
                Direct-to-Work
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='white-text'>
                Apprenticeship
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='white-text'>
                Certificate/Diploma
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='white-text'>
                Degree
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='white-text'>
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