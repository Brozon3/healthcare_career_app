import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function NavBar() {
  const [text, setText] = useState('N');
  const [index, setIndex] = useState(1); // Start index at 1 to include the letter 'N'

  const headerText = "NL Healthcare Careers";

  useEffect(() => {
    const timer = setInterval(() => {
      // Check if all characters have been displayed
      if (index < headerText.length + 1) { // Add 1 to account for the letter 'N'
        setText(headerText.substring(0, index));
        setIndex(index + 1);
      }
    }, 200); // Adjust the speed of typing by changing the interval

    return () => clearInterval(timer);
  }, [index, headerText]);

  return (
    <Navbar collapseOnSelect expand="lg" className="blue-background" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='py-3 white-text nav-link'>
          <animated.h3>
            {text}
          </animated.h3>
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