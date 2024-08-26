import React from 'react'
import './skills.css'
import SkillCard from './SkillCard'
import {SkillsAnimatedIcon} from '../../images'
import { skillsData } from './skillsData'
const Skills = () => {
  return (
    <div className="section-container" id="skills">
      <div className="section-heading">Skills <img src={SkillsAnimatedIcon} alt="skills"/></div>
      <div className='skills-section-body'>
      {skillsData.map((data,index)=>(
        <SkillCard key = {index} header={data.header} skillsList={data.skills_list} animationImage={data.animation_image}/>
      ))}
      </div>
    </div>
  )
}

export default Skills