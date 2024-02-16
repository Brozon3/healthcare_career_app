import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Homepage() {
    return(
        <Container fluid className="p-5 my-5">
            <Row>
                <Col>
                    <Image src="images\NLHCHomePagePhoto.jpg" thumbnail className="m-5"/>
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