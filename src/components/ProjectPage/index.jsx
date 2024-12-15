import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import UseFetch from "../../UseFetch";
import ReusableButton from "../Button";

const ProjectPage = ({ limit }) => {
  const { data, error, isLoading } = UseFetch("projects");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const limitedProjects = limit ? data.slice(0, limit) : data;

  return (
    <div>
      {limitedProjects.length > 0 && (
        <Container className='my-4 py-5'>
          <h2>These are the projects I have worked on so far</h2>
          <Row className='g-4'>
            {limitedProjects.map((project) => (
              <Col key={project._id} md={4}>
                <Card className='h-100'>
                  <Card.Img
                    variant='top'
                    src={project.image}
                    alt={project.name}
                  />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>

                    {project.technologies && project.technologies.length > 0 ? (
                      <div>
                        {project.technologies.map((technology, index) => (
                          <Button
                            key={index}
                            variant='outline-primary'
                            style={{
                              marginRight: "5px",
                              marginBottom: "10px",
                            }}>
                            {technology}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p>No technologies available.</p>
                    )}

                    <div className='project-lauch-btn'>
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <ReusableButton
                          bgcolor='#113d6a'
                          color='white'
                          hoverColor='#0c6dfd'
                          text='Launch Project'
                        />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProjectPage;
