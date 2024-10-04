import React from "react";
import "./achievements.css";
import { AchievementsIcon } from "../../images";
import { achievementsData } from "./AchievementsData";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const renderAchievementCard = (data, index) => (
    <AchievementCard
      key={index}
      year={data.year}
      image={data.image}
      description={data.description}
      header={data.header}
      subheader={data.subheader}
      photo={data.photo}
      video={data?.video}
      certificate={data?.certificate}
      photoHeight = {data?.photoHeight}
    />
  );

  return (
    <div className="section-container" id="achievements">
      <div className="section-heading">
        Achievements
        <img src={AchievementsIcon} alt="achievements" />
      </div>
      <div className="achievements-section-body">
        {achievementsData.map((data,index)=>renderAchievementCard(data,index))}
      </div>
    </div>
  );
};

export default Achievements;
