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
              <NavDropdown.Item href="/certificate" className='white-text'>
                Certificate
              </NavDropdown.Item>
              <NavDropdown.Item href="/diploma" className='white-text'>
                Diploma
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='white-text'>
                Post-Diploma
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/overview" className='white-text'>
                Overview
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/cnaexample' className='white-text'>
                CNAOverview
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