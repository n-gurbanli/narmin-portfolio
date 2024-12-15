import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Importing Grid components
import Projects from "../components/ProjectList";
import Skills from "../components/SkillsList";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import ReusableButton from "../components/Button";

export default function Home() {
  useEffect(() => {
    document.title = "Narmin | Portfolio";
  }, []);

  return (
    <main>
      <Hero />

      <Container className='experience-link'>
        <h2>Experience</h2>
        <p>
          Learn more about my professional experience, skills, and projects in
          the experience section.
        </p>

        <Row className='experience-content'>
          <Col xs={12} md={6}>
            <div className='skills-section'>
              <h3>Skills</h3>
              <Skills />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className='projects-section'>
              <h3>Projects</h3>
              <Projects limit={4} />
              <div className='experience-btn'>
                <Link to='projects'>
                  <ReusableButton
                    bgcolor='#113d6a'
                    color='white'
                    hoverColor='#0c6dfd'
                    onClick={() => handleShowModal(project)}
                    text='View All Projects'
                  />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
