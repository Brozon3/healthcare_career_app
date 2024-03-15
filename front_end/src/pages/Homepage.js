import BezierEasing from 'bezier-easing';
import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Homepage() {

  const [ambulanceAnimation, api] = useSpring(
    () => ({
      from: { transform: "translateX(850px)" },
      delay: 1000,
      to: { transform: "translateX(-300px)" },
      config: { duration: 3000, easing: BezierEasing(0.02, 1, 0.97, 0) },
      loop: true,
    }), []);

  return (

    <Container fluid className="p-5 my-5">
      <Row>
          <Col>
            <div className="wrap">
              <div>
                <Image src="images/hospital.jpg" className="hopsital" width={"100%"} height={"100%"} />
              </div>
              <animated.img src="images/ambulance.png" width={"35%"} height={"35%"} className="ambulance" style={ambulanceAnimation} />
            </div>   
          </Col>

          <Col className="center-text p-4 m-4">
              <h1 className="purple-text p-2 m-2">Welcome to Careers in Healthcare NL</h1>
              <p className="medium-text p-2 m-2">Discover exciting opportunities in the healthcare sector in Newfoundland. 
                  Whether you're looking for a career change or wondering what you want to do after high school, 
                  we have the resources to guide you in the right direction.</p>
              <p className="medium-text p-2 m-2">Explore various healthcare professions and learn about education and training requirements so 
                  that you can get started on your career today.</p>
              <NavLink to={"/overview"}>
                  <Button className="purple-button">Explore</Button>
              </NavLink>
          </Col>

      </Row>
  </Container>
  )
}

export default Homepage;