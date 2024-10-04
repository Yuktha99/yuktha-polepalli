import React from "react";
import { Modal, Button } from "react-bootstrap";

const AchievementModal = ({ show, handleClose, src, title }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src={src}
          style={{ width: "100%", height: "500px", border: "none" }}
          title={title}
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AchievementModal;
