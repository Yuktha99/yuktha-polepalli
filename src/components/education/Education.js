import React from "react";

import "./education.css";
import { educationData } from "./educationData";
import EducationCard from "./EducationCard";
import { EducationIcon } from "../../images";

const Education = () => {
  return (
    <div className="section-container" id="education">
      <div className="section-heading">Education<img src = {EducationIcon} alt="education"/></div>
      
      <div className="education-section-body">
      <div className="vertical-line"></div>
        {educationData.map((data, index) => (
          <EducationCard
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            year={data.year}
            transcript={data.transcript}
            grade={data.grade}
            others={data.others}
            image = {data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
