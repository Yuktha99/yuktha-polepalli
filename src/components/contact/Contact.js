import React from "react";

import "./contact.css";
import {
  EmailIcon
} from "../../images";
import { email_address } from "../../constants/constants";

const Contact = () => {
  
  const handleEmailClick = () => {
    // Opens the user's default email client with pre-filled details
    window.location.href = `mailto:${email_address}`;
  };


  return (
    <div className="section-container" id="contact">
      <div className="section-heading">Contact</div>
      <div className="contact-section-body">
        <div className="contact-text">
          Please reach out to me at  <b onClick={handleEmailClick}>
            <u>{email_address}{" "}</u>
          </b>
          <span>
              <img src={EmailIcon} alt="email" />
            </span>
        </div>

        {/* <div className="buttons" onClick={onResumeClick}>
          <b>
            <span>
              <img src={ResumeIcon} alt="resume" />
            </span>
            Resume{" "}
            <span>
              <img src={ExternalLinkIcon} alt="external-link" className="external-link"/>
            </span>
          </b>
        </div>

        <div className="buttons" onClick={onLinkedInClick}>
          <b>
            <span>
              <img src={LinkedInIcon} alt="resume" />
            </span>
            LinkedIn{" "}
            <span>
              <img src={ExternalLinkIcon} alt="external-link" className="external-link"/>
            </span>
          </b>
        </div>
        <div className="buttons" onClick={handleEmailClick}>
          <b>
            <span>
              <img src={EmailIcon} alt="email" />
            </span>
            <u>{email_address}{" "}</u>
          </b>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
