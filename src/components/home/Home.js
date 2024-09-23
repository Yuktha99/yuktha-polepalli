import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import { particleProperties } from "../../constants/bg_properties";
import {ProfilePic,HelloIcon} from "../../images";
import "./home.css";
import TextAnimation from "./TextAnimation";

const Home = () => {
  const [init, setInit] = useState(false);

  const animation_words = [
    'Full Stack Development',
    'Frontend Development',
    'Backend Development'
  ]

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
          ></Particles>
        </div>
      )}
      <div className="particles-content">
        <img src={ProfilePic} alt="profile pic" className="profile-pic" />
        <div className="text-container">
          <div className="hello-text">
            Hello all!!
            <img
              src={HelloIcon}
              alt="hand-wave"
            />{" "}
            I am Yuktha,{" "}
          </div>
          <div>
            Currently pursuing Master's in Computer Science
          </div>
          {/* <div>
            I specialize in <b>Full Stack Development</b>{" "}
            <img
              src={DeveloperIcon}
              alt="hand-wave"
            />
            .
          </div> */}
          <div>I specialize in <b><TextAnimation words={animation_words} delay={100} infinite wordDelay={1000}/></b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
