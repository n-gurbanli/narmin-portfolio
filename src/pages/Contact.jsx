import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Contact() {
  useEffect(() => {
    document.title = "Narmin | Portfolio";
  }, []);

  return (
    <main>
      <Container className='my-5 py-5'>
        <Row className='align-items-center'>
          <Col xs={12} md={6}>
            <div>
              <ContactForm
                buttonColor='#ab3b61'
                formSize='medium'
                headerText='Want to Work with Me?! Send A Message'
                successMessage='Your message has been sent. Thank you!'
                errorMessage='Failed to send message. Please try again.'
              />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className='d-flex justify-content-center mb-4 mb-md-0 align-items-center'>
            <Image
              src='/images/undraw_mail_re_duel.svg'
              alt='Contact Image'
              fluid
              style={{ maxWidth: "450px", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
