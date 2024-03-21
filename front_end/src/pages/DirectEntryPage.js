import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Functional component for the Direct Entry Page
function DirectEntryPage() {
    // Rendering the component
    return (
        <Container className="py-5 my-5">
            {/* Row for the main heading */}
            <Row className="justify-content-md-center">
                <h1 className="text-center p-2 m-2 purple-text">Which option best describes the type of program you would like to pursue?</h1>
            </Row>
            {/* Row for the 'Degree' option */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'Degree' page */}
                    <NavLink to={"/degree"}>
                        {/* Button for selecting the 'Degree' option */}
                        <Button className="purple-button">Degree</Button>
                    </NavLink>
                </Col>
            </Row>
            {/* Row for the 'Diploma' option */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'Direct Diploma' page */}
                    <NavLink to={"/directDiploma"}>
                        {/* Button for selecting the 'Diploma' option */}
                        <Button className="purple-button">Diploma</Button>
                    </NavLink>
                </Col>
            </Row>
            {/* Row for the 'Certificate' option */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'Direct Certificate' page */}
                    <NavLink to={"/directCert"}>
                        {/* Button for selecting the 'Certificate' option */}
                        <Button className="purple-button">Certificate</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
}

// Exporting the DirectEntryPage component as default
export default DirectEntryPage;