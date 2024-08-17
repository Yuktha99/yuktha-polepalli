import React from "react";

import "./about.css";
import LinkedInLogo from "../../images/linkedin.png";
import ResumeLogo from "../../images/resume.png";
import { linkedIn_url, resume_link } from "../../constants/constants";
// import ResumeModal from "./ResumeModal";
// import AboutLogo from "../../images/id-card.png";


const About = () => {

  // const [isOpen, setIsOpen] = useState(false);

  //   const openModal = () => setIsOpen(true);
  //   const closeModal = () => setIsOpen(false);

  const onLinkedInClick = ()=>{
    window.open(linkedIn_url, "_blank");
  }

  const onResumeClick = () =>{
    window.open(resume_link,"_blank")
  }

  return (
    <div className="section-container" id="about">
      <div className="section-heading">About</div>
      <div className="section-body">
        {/* <img src={AboutLogo} width={50} height={50} alt="about" /> */}
        <div className="section-text">
          I’m <b>Yuktha Polepalli</b>, a <b>Full Stack Developer</b> with over{" "}
          <b>3.5</b> years of total experience, currently interning as a{" "}
          <b>Software Developer</b> at <b>Hewlett Packard Enterprise</b>. I’m
          pursuing a Master of Science in <b>Computer Science</b> at the{" "}
          <b>University of California, Riverside</b>, and hold a Bachelor's
          degree in Information Science from RNS Institute of Technology,
          Bangalore. My expertise lies in both{" "}
          <b>front-end and back-end development</b>, with a strong track record
          in building{" "}
          <b>
            large-scale web applications, developing REST APIs, and working with
            microservices
          </b>
          . I’m passionate about <b>coding and problem-solving</b>, and I thrive
          in collaborative environments where I can contribute to innovative
          projects
        </div>
      </div>

      <div className="about-buttons">
        <button onClick={onLinkedInClick}>
          Linkedin{" "}
          <img src={LinkedInLogo} width={25} height={22} alt="linkedin" />
        </button>
        <button onClick={onResumeClick}>
          My Resume
          <img src={ResumeLogo} width={27} height={25} alt="resume" />
        </button>
      </div>
      {/* <ResumeModal isOpen={isOpen} closeModal={closeModal}/> */}
    </div>
  );
};

export default About;
