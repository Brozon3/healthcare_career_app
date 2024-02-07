import { Container, Row, Col, Image } from "react-bootstrap";

function DiplomaPage() {
    return(
        <Container fluid className="p-5 my-5">
            <Row>
                <Col md={6} className="align-items-center text-center p-5 my-3">
                    <h2>Why a Diploma?</h2>
                    <p>Pursuing a diploma in healthcare opens doors to a fulfilling career with numerous benefits:</p>

                            <p><b>Comprehensive Training:</b></p> <p>Diplomas provide in-depth education and hands-on training tailored to specific healthcare professions, preparing you for real-world challenges.</p>
                            <p><b>Career Advancement:</b></p> <p>With a diploma, you'll have the qualifications and skills needed to pursue higher-level positions and take on greater responsibilities in your field.</p>
                            <p><b>Job Security:</b></p> <p>The healthcare industry is constantly growing, offering stable employment opportunities and job security for diploma holders.</p>
                            <p><b>Rewarding Work:</b></p> <p>Healthcare professions allow you to make a positive impact on the lives of others, providing care, comfort, and support to patients in need.</p>

                    <p>Whether you're passionate about patient care, diagnostic technology, or therapeutic interventions, pursuing a diploma in healthcare equips you with the knowledge and skills to succeed in a dynamic and rewarding industry.</p>
                </Col>

                <Col className="center-text p-5 my-1">
                    <Image src="images\mladiploma.jpg" thumbnail className="big-pic"/>
                </Col>
            </Row>

        </Container>
    )
}

export default DiplomaPage;