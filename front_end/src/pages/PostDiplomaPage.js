import { Container, Row, Col, Image } from "react-bootstrap";

function PostDiplomaPage(){
    return(
        <Container fluid className="p-5 my-5">
            <Row>
                <Col md={6} className="align-items-center text-center p-5 my-5">
                    <h2>Why a Post Diploma?</h2>
                    <p>The healthcare industry presnts a multitude of compelling reasons for aspiring professionals. 
                        Firstly, the healthcare sector is renowned for its stability and resilience, even amidst 
                        economic uncertainties. By pursuing specialized training through a post-diploma program, 
                        individuals can equip themselves with the necessary expertise to enter this thriving field.</p>
                    <p>Moreover, the demand for skilled healthcare professionals continues to escalate with evolving 
                        demographic trends, such as aging population and expanding healthcare needs. A post-diploma 
                        program provides a streamlined pathway for career transtion or advancement, enabling 
                        individuals to capitalize on burgeoning job opportunities within the healthcare sector. 
                        Additionally, the potential for career growth and advancement in healthcare is vast, 
                        offering avenues for specialization, leadership roles and interdisciplinary collaboration. 
                        By investing in a post-diploma program, individuals can position themselves for long-term 
                        success and fulfillment in a field that prioritizes service, innovation and meangingful 
                        impact of individual's lives.</p>
                </Col>

                <Col className="center-text p-5 my-1">
                    <Image src="images/postdiplomapic.jpg" thumbnail className="big-pic" />
                </Col>
            </Row>
        </Container>
    )
    
}

export default PostDiplomaPage;