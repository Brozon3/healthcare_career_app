import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Functional component for the Entry Page
function EntryPage() {
    // Rendering the component
    return (
        <Container className="py-5 my-5">
            {/* Row for the main heading */}
            <Row className="justify-content-md-center">
                {/* Main heading */}
                <h1 className="text-center p-2 m-2 purple-text">Which option best describes your preference in terms of entry?</h1>
            </Row>
            {/* Row for the 'Competitive' button */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'competitive' page */}
                    <NavLink to={"/competitive"}>
                        {/* Button for selecting the 'Competitive' option */}
                        <Button className="purple-button">Competitive</Button>
                    </NavLink>
                </Col>
            </Row>
            {/* Row for the 'Direct Entry' button */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'direct' page */}
                    <NavLink to={"/direct"}>
                        {/* Button for selecting the 'Direct Entry' option */}
                        <Button className="purple-button">Direct Entry</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}

// Exporting the EntryPage component as default
export default EntryPage;