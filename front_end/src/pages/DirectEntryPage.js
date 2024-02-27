import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function DirectEntryPage() {

return(
    <Container className="py-5 my-5">
        <Row className="justify-content-md-center">
            <h1 className="text-center p-2 m-2 purple-text">Which option best describes the type of program you would like to pursue?</h1>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="p-2 m-2" md="auto">
                <NavLink to={"/degree"}>
                    <Button className="purple-button">Degree</Button>
                </NavLink>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="p-2 m-2" md="auto">
            <NavLink to={"/diploma"}>
                    <Button className="purple-button">Diploma</Button>
                </NavLink>
            </Col>    
        </Row>
        <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                <NavLink to={"/certificate"}>
                        <Button className="purple-button">Certificate</Button>
                    </NavLink>
                </Col>    
            </Row>
    </Container>
)

}

export default DirectEntryPage