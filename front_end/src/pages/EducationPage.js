import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Functional component for the Education Page
function EducationPage(){
    // Rendering the component
    return(
        <Container className="py-5 my-5">
            {/* Row for the main heading */}
            <Row className="justify-content-md-center">
                {/* Main heading */}
                <h1 className="text-center p-2 m-2 purple-text">Which option best describes your education?</h1>
            </Row>
            {/* Row for the 'High School - Question Filter' button */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'entry' page */}
                    <NavLink to={"/entry"}>
                        {/* Button for selecting the 'High School - Question Filter' option */}
                        <Button className="purple-button">High School - Question Filter</Button>
                    </NavLink>
                </Col>
            </Row>
            {/* Row for the 'High School - Flow Diagrams' button */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'highschool' page */}
                    <NavLink to={"/highschool"}>
                        {/* Button for selecting the 'High School - Flow Diagrams' option */}
                        <Button className="purple-button">High School - Flow Diagrams</Button>
                    </NavLink>
                </Col>
            </Row>
            {/* Row for the 'High School - Circular' button */}
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    {/* NavLink to navigate to the 'postsecondary' page */}
                    <NavLink to={"/postsecondary"}>
                        {/* Button for selecting the 'High School - Circular' option */}
                        <Button className="purple-button">High School - Circular</Button>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}

// Exporting the EducationPage component as default
export default EducationPage;