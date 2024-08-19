import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";

const ExperienceCard = ({
  image,
  year,
  header,
  subheader,
  description,
  skills,
  explanation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const onLearnMoreClick = () => {
    openModal();
  };
  return (
    <div className="experience-card">
      <div className="year-and-image">
        <img src={image} alt={year} />
        <div className="year">{year}</div>
      </div>
      <div className="horizontal-line"></div>
      <div className="description-section">
        <div className="header">{header}</div>
        <div className="sub-header">{subheader}</div>
        <div className="tech-stack">
          <div>Used: </div>
          {skills.map((data, index) => (
            <img src={data.image} alt={data.name} key={index} />
          ))}
        </div>
        <p>
          {description}
          <span>
            {" "}
            <Button variant="link" onClick={onLearnMoreClick}>
              Learn more
            </Button>
          </span>
        </p>
      </div>
      <ExperienceModal
        header={header}
        subheader={subheader}
        year={year}
        skills={skills}
        explanation={explanation}
        isOpen={isOpen}
        handleClose={closeModal}
      />
    </div>
  );
};

export default ExperienceCard;
