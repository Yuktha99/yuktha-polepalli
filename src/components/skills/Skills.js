import React from 'react'
import ReactIcon from '../../images/react.png'
import FrontendAnimation from '../../images/frontend.gif'
import './skills.css'
import SkillCard from './SkillCard'
import SkillsIcon from '../../images/skills.png'
const Skills = () => {
  const skills_data=[
    {
      header: 'Frontend Development',
      skills_list: [
        {
          image: ReactIcon,
          name: 'ReactJS/ React Native'
        },
        {
          image: ReactIcon,
          name: 'ReactJS/Native'
        },
        {
          image: ReactIcon,
          name: 'ReactJS/Native'
        },
        {
          image: ReactIcon,
          name: 'ReactJS/ React Native'
        },
        {
          image: ReactIcon,
          name: 'ReactJS/ React Native'
        }
        
      ],
      animation_image: FrontendAnimation
    }
  ]
  return (
    <div className="section-container" id="skills">
      <div className="section-heading">Skills <img src={SkillsIcon} alt="skills"/></div>
      <div className='skills-section-body'>
      {skills_data.map((data,index)=>(
        <SkillCard id = {index} header={data.header} skillsList={data.skills_list} animationImage={data.animation_image}/>
      ))}
      </div>
    </div>
  )
}

export default Skills