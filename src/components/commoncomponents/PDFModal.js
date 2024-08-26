import { Modal, Button } from 'react-bootstrap';

const PDFModal = ({ show, handleClose, pdfFile, title }) => {
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe
                    src={pdfFile}
                    style={{ width: '100%', height: '500px', border: 'none' }}
                    title="PDF Preview"
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
export default PDFModal

