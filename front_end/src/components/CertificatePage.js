import { Container, Row, Col, Image } from "react-bootstrap";

function CertificatePage() {
    return(
        <Container fluid className="p-5 my-5">
            <Row>
                <Col md={6} className="align-items-center text-center p-5 my-5">
                    <h2>Why a Certificate?</h2>
                    <p>Obtaining a certificate as a home care assistant, personal care attendant, or medical lab assistant 
                        opens up a world of opportunities in the healthcare industry.</p>
                        
                    <p>As a home care assistant, you'll have the rewarding opportunity to provide essential support and 
                        companionship to individuals in need, allowing them to maintain their independence and quality 
                        of life within the comfort of their own homes.</p>
                        
                    <p>Similarly, as a personal care attendant, you'll play a crucial role in assisting clients 
                        with daily tasks, offering compassionate care, and enhancing their overall well-being.</p>
                        
                    <p>Additionally, pursuing a certificate as a medical lab assistant equips you with the skills and knowledge 
                        necessary to work behind the scenes in healthcare settings, conducting vital laboratory tests and 
                        analyses that contribute to accurate diagnoses and patient care.</p>
                        
                    <p>Whether you're drawn to direct patient care or prefer a laboratory environment, obtaining these 
                        certificates sets you on a fulfilling career path where you can make a meaningful difference in 
                        people's lives every day.</p>
                </Col>

                <Col className="center-text p-5 my-1">
                    <Image src="images\hcacert.jpg" thumbnail className="big-pic"/>
                </Col>
            </Row>

        </Container>
    )
}

export default CertificatePage;