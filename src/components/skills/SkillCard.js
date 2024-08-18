import React from 'react'
import { Card } from 'react-bootstrap'

const SkillCard = ({header, skillsList, animationImage}) => {
  return (
    <Card className='skills-card'>
        <Card.Title  className='skills-card-title'>{header}</Card.Title>
        <Card.Body className='skills-card-body'>
          <div className='card-skills-container'>
            {skillsList.map((skill,index)=>(
              <div id={index} className='card-skill'>
                <img src={skill?.image} alt={skill?.name}/>
                <div>{skill?.name}</div>
              </div>
            ))}
          </div>
          <img src={animationImage} alt='frontend' className='animation-image'/>
        </Card.Body>
      </Card>
  )
}

export default SkillCard