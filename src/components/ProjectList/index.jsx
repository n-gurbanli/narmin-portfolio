import React, { useState } from "react";
import { Card, Col, Row, Modal, Button } from "react-bootstrap";
import UseFetch from "../../UseFetch";
import ReusableButton from "../Button";

const Projects = ({ limit }) => {
  const { data, error, isLoading } = UseFetch("projects");

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const limitedProjects = limit ? data.slice(0, limit) : data;

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div>
      {limitedProjects.length > 0 && (
        <Row className='g-2'>
          {limitedProjects.map((project) => (
            <Col key={project._id} md={6}>
              <Card className='h-100'>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  <ReusableButton
                    bgcolor='#113d6a'
                    color='white'
                    hoverColor='#0c6dfd'
                    onClick={() => handleShowModal(project)}
                    text='View Details'
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description:</h5>
          <p>{selectedProject?.description}</p>
          <h5>Technologies:</h5>
          {selectedProject?.technologies &&
          selectedProject.technologies.length > 0 ? (
            <div>
              {selectedProject.technologies.map((technology, index) => (
                <Button
                  key={index}
                  variant='info'
                  style={{ marginRight: "5px", marginBottom: "5px" }}>
                  {technology}
                </Button>
              ))}
            </div>
          ) : (
            <p>No technologies available.</p>
          )}

          <h5>Project Link:</h5>
          <a
            href={selectedProject?.link}
            target='_blank'
            rel='noopener noreferrer'>
            {selectedProject?.link}
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
