import { Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";
import CircularImage from "../components/CircularImage";

// Functional component for the Circular Image Page
function CircularImagePage(){
    
    // State variables to manage checkbox states for filtering
    const [ hideCertificates, setHideCertificates ] = useState(false);
    const [ hideDiplomas, setHideDiplomas ] = useState(false);
    const [ hideRequiresPhysics, setHideRequiresPhysics ] = useState(false);
    const [ hideRequiresChemsitry, setHideRequiresChemistry ] = useState(false);
    const [ hideLessThanFiftyThousand, setHideLessThanFiftyThousand ] = useState(false);
    const [ hideLessThanThreeYears, setHideLessThanThreeYears ] = useState(false);

    // Event handlers for checkbox changes
    const handleCertifcatesChange = (event) => {
        setHideCertificates(event.target.checked);
    }

    const handleDiplomasChange = (event) => {
        setHideDiplomas(event.target.checked);
    }

    const handlePhysicsChange = (event) => {
        setHideRequiresPhysics(event.target.checked);
    }

    const handleChemistryChange = (event) => {
        setHideRequiresChemistry(event.target.checked);
    }

    const handleSalaryChange = (event) => {
        setHideLessThanFiftyThousand(event.target.checked);
    }

    const handleLengthChange = (event) => {
        setHideLessThanThreeYears(event.target.checked);
    }

    // Rendering the component
    return(
        <Container fluid className="pt-5 mt-5">
            <Row className="justify-content-md-center">

                {/* Form to control filtering options */}
                <Col>
                    <Form className="purple-border p-2">
                        <h3 className=" text-center purple-text">Hide:</h3>
                        {/* Checkboxes for various filtering options */}
                        <Form.Check
                            type="checkbox"
                            id="certificates"
                            label="Certificates"
                            checked={hideCertificates}
                            onChange={handleCertifcatesChange}
                        />
                        <Form.Check
                            type="checkbox"
                            id="diplomas"
                            label="Diplomas"
                            checked={hideDiplomas}
                            onChange={handleDiplomasChange}
                        />
                        <Form.Check
                            type="checkbox"
                            id="physics"
                            label="Requires Physics"
                            checked={hideRequiresPhysics}
                            onChange={handlePhysicsChange}
                        />
                        <Form.Check
                            type="checkbox"
                            id="chemistry"
                            label="Requires Chemistry"
                            checked={hideRequiresChemsitry}
                            onChange={handleChemistryChange}
                        />
                        <Form.Check
                            type="checkbox"
                            id="lessthanfiftythou"
                            label="Salary Less Than $50,000"
                            checked={hideLessThanFiftyThousand}
                            onChange={handleSalaryChange}
                        />
                        <Form.Check
                            type="checkbox"
                            id="lessthanthreeyears"
                            label="Three Year Programs"
                            checked={hideLessThanThreeYears}
                            onChange={handleLengthChange}
                        />
                    </Form>
                </Col>

                {/* Circular Image display component */}
                <Col className="p-2 m-2" md="auto">
                    <h1 className="text-center purple-text">
                        <em>Hover</em> or <em>Click</em> to explore!
                    </h1>
                    {/* Passing filtering options as props to the CircularImage component */}
                    <CircularImage 
                        hideCertificates={hideCertificates} 
                        hideDiplomas={hideDiplomas} 
                        hideRequiresPhysics={hideRequiresPhysics} 
                        hideRequiresChemsitry={hideRequiresChemsitry} 
                        hideLessThanFiftyThousand={hideLessThanFiftyThousand}
                        hideLessThanThreeYears={hideLessThanThreeYears}
                    />
                </Col>

            </Row>
        </Container>
    )
}

// Exporting the CircularImagePage component as default
export default CircularImagePage;