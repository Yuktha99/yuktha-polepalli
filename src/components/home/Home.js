import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import { particleProperties } from "../../constants/bg_properties";

import './home.css'
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';
import Education from '../education/Education';
import Experience from '../experience/Experience';

const Home = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="home">
      {init && (
        <div className="particles-container">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particleProperties}
          >
            
          </Particles>
        </div>
      )}
    {/* <div className='particles-content'>
      <p>Yuktha Polepalli</p>
    </div> */}
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Education/>
    <Contact/>
  
   

    </div>
  )
}

export default Home