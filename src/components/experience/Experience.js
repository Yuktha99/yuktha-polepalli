import React from "react";

import "./experience.css";
import ExperienceCard from "./ExperienceCard";
import { experience_data } from "./experienceData";
import { BusyIcon, HelpIcon } from "../../images";

const Experience = () => {
  const renderExperienceCard = (data,index) => (
    <ExperienceCard
      key = {index}
      year={data.year}
      image={data.image}
      description={data.description}
      header={data.header}
      subheader={data.subheader}
      skills = {data.techStack}
      explanation = {data.explanation}
    />
  );

  return (
    <div className="section-container" id="experience">
      <div className="section-heading">Experience</div>
      <div className="experience-section-body">
        <section id="conference-timeline">
          <div className="looking-for-jobs">
            <img src={BusyIcon} alt="looking for jobs"/>
            <div>Currently looking for full time roles!! Any help would be appreciated<img src={HelpIcon} alt="help" className="help-img"/></div>
          </div>
          <div className="timeline-start">&#9650;</div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            {experience_data.map((data, index) => (
              <div key ={index} className="timeline-article">
                <div className="content-left-container">
                  {index % 2 === 0 && renderExperienceCard(data,index)}
                </div>
                <div className="content-right-container">
                  {index % 2 !== 0 && renderExperienceCard(data,index)}
                </div>
              </div>
            ))}
          </div>
          <div className="timeline-end"></div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
