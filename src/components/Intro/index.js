import React from "react";
import "./style.css";
import Image from "../../images/shijir.JPG";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <img
          src={Image}
          alt="Portfolio picture"
          className="intro-portfolio-image"
        />
        <h1 className="intro-big-name">Shijir-Erdene Bat-Enkh</h1>
        <hr className="intro-line"></hr>
        <p className="intro-text">
          Full-Stack Developer based in San Francisco, CA
        </p>
      </div>
    </div>
  );
};

export default Intro;
