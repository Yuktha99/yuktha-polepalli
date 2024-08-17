import React from "react";
import { Button, Modal } from "react-bootstrap";
import PdfViewer from "./PdfViewer";
// import { resume_link } from "../../constants/constants";
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

// import pdfWorker from 'pdfjs-dist/build/pdf.worker.min';

// // Configure the worker path
// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;


const ResumeModal = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Modal show={isOpen} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>PDF Viewer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PdfViewer pdfUrl="../../images/yuktha-cv-jul-24.pdf" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResumeModal;
