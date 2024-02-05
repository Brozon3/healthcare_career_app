import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Homepage() {
    return(
        <Container fluid className="p-5 my-5">
            <Row>
                <Col>
                    <Image src="images\NLHCHomePagePhoto.jpg" thumbnail/>
                </Col>

                <Col className="center-text">
                    <h1 className="purple-text">Welcome to Careers in Healthcare NL</h1>
                    <p>Discover exciting opportunities in the healthcare sector in Newfoundland. 
                        Whether you're looking for a career change or wondering what you want to do after high school, 
                        we have the resources to guide you in the right direction.</p>
                    <p>Explore various healthcare professions and learn about education and training requirements so 
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