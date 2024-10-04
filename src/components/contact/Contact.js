import React from "react";

import "./contact.css";
import {
  EmailIcon,
  ExternalLinkIcon,
  LinkedInIcon,
  ResumeIcon,
} from "../../images";
import {
  email_address,
  github_link,
  linkedIn_url,
  resume_external_link,
} from "../../constants/constants";
import { GitLogo } from "../../images/skills/images";

const Contact = () => {
  const handleEmailClick = () => {
    // Opens the user's default email client with pre-filled details
    window.location.href = `mailto:${email_address}`;
  };

  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="section-container" id="contact">
      <div className="section-heading">Contact</div>
      <div className="contact-section-body">
        <div className="contact-text">
          Please reach out to me at{" "}
          <b onClick={handleEmailClick}>
            <u>{email_address} </u>
          </b>
          <span>
            <img src={EmailIcon} alt="email" />
          </span>
        </div>
        <div className="links">
          <div
            className="buttons"
            onClick={() => {
              handleExternalLinkClick(resume_external_link);
            }}
          >
            <b>
              <span>
                <img src={ResumeIcon} alt="resume" />
              </span>
              Resume{" "}
              <span>
                <img
                  src={ExternalLinkIcon}
                  alt="external-link"
                  className="external-link"
                />
              </span>
            </b>
          </div>

          <div
            className="buttons"
            onClick={() => {
              handleExternalLinkClick(linkedIn_url);
            }}
          >
            <b>
              <span>
                <img src={LinkedInIcon} alt="resume" />
              </span>
              LinkedIn{" "}
              <span>
                <img
                  src={ExternalLinkIcon}
                  alt="external-link"
                  className="external-link"
                />
              </span>
            </b>
          </div>
          <div
            className="buttons"
            onClick={() => {
              handleExternalLinkClick(github_link);
            }}
          >
            <b>
              <span>
                <img src={GitLogo} alt="git" />
              </span>
              Github{" "}
              <span>
                <img
                  src={ExternalLinkIcon}
                  alt="external-link"
                  className="external-link"
                />
              </span>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
