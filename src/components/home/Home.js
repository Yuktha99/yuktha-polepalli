import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";
import { particleProperties } from "../../constants/bg_properties";
import {ProfilePic,HelloIcon,DeveloperIcon} from "../../images";
import "./home.css";
// import TextAnimation from "./TextAnimation";

const Home = () => {
  const [init, setInit] = useState(false);

  // const animation_words = [
  //   'Yuktha',
  //   'a Software Engineer',
  //   'a Full Stack Developer'
  // ]

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
            Currently interning as a <b>Software Developer</b> at HPE.
          </div>
          <div>
            I specialize in <b>Full Stack Development</b>{" "}
            <img
              src={DeveloperIcon}
              alt="hand-wave"
            />
            .
          </div>
          {/* <div>I am <TextAnimation words={animation_words} delay={100} infinite wordDelay={1000}/></div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
