import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../ContactForm";
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer text-white py-4'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          <Col
            xs={12}
            md={6}
            lg={5}
            className='text-center text-md-left justify-content-space-between'>
            <ContactForm
              buttonColor='#ab3b61'
              formSize='small'
              headerText='Get In Touch!'
              successMessage='Your message has been sent. Thank you!'
              errorMessage='Failed to send message. Please try again.'
            />
          </Col>

          <Col
            xs={12}
            md={6}
            lg={5}
            className='text-center text-md-right mt-4 mt-md-0'>
            <h5>Connect With Me</h5>
            <p>
              To stay connected with what I am building and everything i am
              developing, check out all my socials
            </p>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaGithub size={30} />
            </a>
            <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaLinkedin size={30} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaTwitter size={30} />
            </a>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white mx-2'>
              <FaInstagram size={30} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
