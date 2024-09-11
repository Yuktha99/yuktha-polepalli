import React from "react";

import "./contact.css";
import {
  ChatIcon,
  EmailIcon,
  EmploymentIcon,
  ExternalLinkIcon,
  HandshakeIcon,
  LinkedInIcon,
  ResumeIcon,
} from "../../images";
import { email_address, linkedIn_url, resume_external_link } from "../../constants/constants";

const Contact = () => {
  const onResumeClick = () => {
    window.open(resume_external_link, "_blank");
  };

  const onLinkedInClick = () =>{
    window.open(linkedIn_url, "_blank");
  }

  const handleEmailClick = () => {
    // Opens the user's default email client with pre-filled details
    window.location.href = `mailto:${email_address}`;
  };


  return (
    <div className="section-container" id="contact">
      <div className="section-heading">Contact</div>
      <div className="contact-section-body">
        <div className="contact-text">
          I’d love to connect
          <span>
            <img src={HandshakeIcon} alt="handshake" />
          </span>
          , learn from each other, and explore new opportunities
          <span>
            <img src={EmploymentIcon} alt="employment" />
          </span>
          . Let’s chat!!
          <span>
            <img src={ChatIcon} alt="chat" />
          </span>
        </div>

        <div className="buttons" onClick={onResumeClick}>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
