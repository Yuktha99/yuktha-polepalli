import React from "react";
import { HandshakeIcon } from "../../images";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./connect.css";
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

const popover = (
  <Popover id="popover-basic" className="popover">
    <Popover.Header as="h3">Let's Connect</Popover.Header>
    <Popover.Body>
      <div className="links">
      <div
          className="buttons"
          onClick={() => {
            window.location.href = `mailto:${email_address}`;
          }}
        >
          <b>
            <span>
              <img src={EmailIcon} alt="email" />
            </span>
            {email_address}
          </b>
        </div>
        <div
          className="buttons"
          onClick={() => {
            window.open(resume_external_link, "_blank");
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
            window.open(linkedIn_url, "_blank");
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
            window.open(github_link, "_blank");
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
    </Popover.Body>
  </Popover>
);

const Connect = () => {
  return (
    <div className="lets-connect">
      <OverlayTrigger
        trigger="click"
        placement="left"
        delay={{ show: 250, hide: 400 }}
        overlay={popover}
      >
        <button>
          {" "}
          <img src={HandshakeIcon} alt="connect" />
        </button>
      </OverlayTrigger>
    </div>
  );
};

export default Connect;
