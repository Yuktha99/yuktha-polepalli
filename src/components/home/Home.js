import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import { particleProperties } from "../../constants/bg_properties";

import './home.css'

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
    <div>
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
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>
    <div>dsnsfmeanf</div>

    </div>
  )
}

export default Home