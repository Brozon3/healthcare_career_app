import BezierEasing from 'bezier-easing';
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

// Functional component for the Homepage
function Homepage() {
  // Setting up animation for the ambulance
  const [ambulanceAnimation, api] = useSpring(
    () => ({
      // Initial and final positions for the animation
      from: { transform: "translateX(850px)" },
      to: { transform: "translateX(-300px)" },
      // Animation configuration
      delay: 1000,
      config: { duration: 3000, easing: BezierEasing(0.02, 1, 0.97, 0) }, // Bezier easing function
      loop: true, // Loop the animation
    }), []); // Empty dependency array for animation to run only once

  // Rendering the component
  return (
    <Container fluid className="p-5 my-5">
      <Row>
        {/* Column for the hospital image and animated ambulance */}
        <Col>
          <div className="wrap">
            <div>
              {/* Hospital image */}
              <Image src="images/hospital.jpg" className="hopsital" width={"100%"} height={"100%"} />
            </div>
            {/* Animated ambulance image */}
            <animated.img src="images/ambulance.png" width={"35%"} height={"35%"} className="ambulance" style={ambulanceAnimation} />
          </div>
        </Col>

        {/* Column for the text content */}
        <Col className="center-text p-4 m-4">
          {/* Main heading */}
          <h1 className="purple-text p-2 m-2">Welcome to Careers in Healthcare NL</h1>
          {/* Description */}
          <p className="medium-text p-2 m-2">Discover exciting opportunities in the healthcare sector in Newfoundland. 
            Whether you're looking for a career change or wondering what you want to do after high school, 
            we have the resources to guide you in the right direction.</p>
          {/* Additional information */}
          <p className="medium-text p-2 m-2">Explore various healthcare professions and learn about education and training requirements so 
            that you can get started on your career today.</p>
          {/* Button to explore */}
          <NavLink to={"/overview"}>
            <Button className="purple-button">Explore</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
}

// Exporting the Homepage component as default
export default Homepage;