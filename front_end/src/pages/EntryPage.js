import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function EntryPage() {

return(
    <Container className="py-5 my-5">
        <Row className="justify-content-md-center">
            <h1 className="text-center p-2 m-2 purple-text">Which option best describes your perference in terms of entry?</h1>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="p-2 m-2" md="auto">
                <NavLink to={"/competitive"}>
                    <Button className="purple-button">Competitive</Button>
                </NavLink>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col className="p-2 m-2" md="auto">
            <NavLink to={"/direct"}>
                    <Button className="purple-button">Direct Entry</Button>
                </NavLink>
            </Col>    
        </Row>
    </Container>
)

}

export default EntryPage