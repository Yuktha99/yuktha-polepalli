import React from "react";
import { Button, Modal } from "react-bootstrap";
import SkillCard from "../skills/SkillCard";

const ExperienceModal = ({
  header,
  subheader,
  skills,
  explanation,
  year,
  isOpen,
  handleClose,
}) => {
  const description = (explanation || '')
    .trim()
    .split("•")
    .filter((point) => point?.trim() !== "");
  return (
    <Modal show={isOpen} onHide={handleClose} size="lg" className="experience-modal">
      <Modal.Header closeButton>
        <Modal.Title className="modal-header">{header}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body">
        <div className="modal-subheader">
          <div>{subheader}</div>
          <div>{year}</div>
        </div>
        <SkillCard skillsList={skills} />
        <ul className="description-section">
          {description.map((point, index) => (
            <li key={index}>{point.trim()}</li> // Trim whitespace from each point
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
