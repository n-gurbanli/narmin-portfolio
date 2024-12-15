import { Container, Row, Image, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReusableButton from "../Button";

function Hero() {
  return (
    <Container className='hero-section' fluid>
      <Row className='align-items-center justify-content-center'>
        <Col
          xs={8}
          md={4}
          className='text-white d-flex justify-content-center p-4'>
          <div className='hero-text'>
            <h1>Hello, I am Narmin Gurbanli</h1>
            <p>
              I am a dedicated designer passionate about creating user-friendly
              and accessible websites. With a focus on functionality and
              aesthetics, I aim to ensure every user has a seamless experience.
            </p>
            <Link to='/contact'>
              <ReusableButton
                bgcolor='#eee2dc'
                color='black'
                width='200px'
                hoverColor='#edc7b8'
                size='18px'
                text='Contact Me'
              />
            </Link>
          </div>
        </Col>
        <Col xs={8} md={4} className='d-flex justify-content-center p-4'>
          <Image
            src='/images/narmin.jpg'
            alt='narmin-gurbanli'
            roundedCircle
            fluid
            style={{ maxWidth: "300px", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
