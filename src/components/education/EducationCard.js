import React, {useState} from "react";
import { Button, Card } from "react-bootstrap";
import PDFModal from "../commoncomponents/PDFModal";

const EducationCard = ({
  title,
  subtitle,
  grade,
  transcript,
  year,
  others,
  image
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onClickViewTranscript = () => {
    openModal();
  };
  return (
    <Card className="education-card">
      <Card.Header><Card.Title>{title}</Card.Title></Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <div className="card-text-and-image">
          <div className="card-text-container">
          <div>
            <b>Year: </b>
            {year}
          </div>
          <div>
            <b>Grade: </b>
            {grade}
          </div>
          {others && (
            <div>
              <b>Others: </b>
              {others}
            </div>
          )}
          </div>
          <img src={image} alt={title}/>
        </div>
        {transcript && (
          <Button onClick={onClickViewTranscript} variant="outline-primary" size="sm">View Transcript</Button>
        )}
      </Card.Body>
      <PDFModal
        title={`Transcript for ${title}`}
        show={isOpen}
        handleClose={closeModal}
        pdfFile={transcript}
      />
    </Card>
  );
};

export default EducationCard;
