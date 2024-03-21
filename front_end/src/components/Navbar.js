import { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { animated } from 'react-spring';

// Functional component for the Navbar
function NavBar() {
  // State variables for managing text animation
  const [text, setText] = useState('N');
  const [index, setIndex] = useState(1); // Start index at 1 to include the letter 'N'

  // Header text to be displayed
  const headerText = "NL Healthcare Careers";

  // Effect hook to update the text in the Navbar header
  useEffect(() => {
    const timer = setInterval(() => {
      // Check if all characters have been displayed
      if (index < headerText.length + 1) { // Add 1 to account for the letter 'N'
        setText(headerText.substring(0, index));
        setIndex(index + 1);
      }
    }, 200); // Adjust the speed of typing by changing the interval

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, [index, headerText]);

  // Rendering the Navbar component
  return (
    <Navbar expand="lg" className="blue-background" fixed="top">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/" className='py-3 white-text nav-link'>
          {/* Animated header text */}
          <animated.h3>
            {text}
          </animated.h3>
        </Navbar.Brand>
        {/* Navigation link to overview page */}
        <NavLink to={"/overview"}>
          {/* Button to explore */}
          <Button className="purple-button">Explore</Button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

// Exporting the NavBar component as default
export default NavBar;