import { Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function EducationPage(){
    return(
        <Container className="py-5 my-5">
            <Row className="justify-content-md-center">
                <h1 className="text-center p-2 m-2 purple-text">Which option best describes your education?</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    <NavLink to={"/entry"}>
                        <Button className="purple-button">High School</Button>
                    </NavLink>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                    <NavLink to={"/highschool"}>
                        <Button className="purple-button">High School - 1</Button>
                    </NavLink>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="p-2 m-2" md="auto">
                <NavLink to={"/postsecondary"}>
                        <Button className="purple-button">High School - 2</Button>
                    </NavLink>
                </Col>    
            </Row>
        </Container>
    )
}

export default EducationPage;