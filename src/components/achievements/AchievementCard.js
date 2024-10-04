import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AchievementModal from "./AchievementModal";

const AchievementCard = ({
  image,
  year,
  header,
  subheader,
  description,
  photo,
  video,
  certificate,
  photoHeight
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const openVideoModal = () => {
    setIsVideoOpen(true);
  };
  const closeVideoModal = () => {
    setIsVideoOpen(false);
  };
  const onVideoClick = () => {
    openVideoModal();
  };

  const [isCertOpen, setIsCertOpen] = useState(false);
  const openCertModal = () => {
    setIsCertOpen(true);
  };
  const closeCertModal = () => {
    setIsCertOpen(false);
  };
  const onCertClick = () => {
    openCertModal();
  };
  return (
    <div className="achievements-card">
      <div className="year-and-image">
        <img src={image} alt={year} />
        <div className="year">{year}</div>
      </div>
      <div className="horizontal-line"></div>
      <div className="description-section">
        <div className="header">{header}</div>
        <div className="sub-header">{subheader}</div>
        <img src={photo} alt="achievement" width="100%" style={{height: photoHeight?photoHeight:'150px'}}/>
        <p>{description}</p>

        {video && (
          <Button variant="outline-primary" onClick={onVideoClick} size="sm">
            Video
          </Button>
        )}
        {certificate && (
          <Button variant="outline-primary" onClick={onCertClick} size="sm">
            Certificate
          </Button>
        )}
      </div>
      <AchievementModal
        title={header}
        src={video}
        show={isVideoOpen}
        handleClose={closeVideoModal}
      />
      <AchievementModal
        title={header}
        src={certificate}
        show={isCertOpen}
        handleClose={closeCertModal}
      />
    </div>
  );
};

export default AchievementCard;
