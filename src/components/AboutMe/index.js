import React from "react";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="header">
        <p className="ABOUT-ME">ABOUT ME</p>
        <hr className="line"></hr>
      </div>
      <br></br>
      <div className="about-me-wrapper">
        <div className="experience-and-education">
          <div className="experience">
            <h1 className="big-text">EXPERIENCE</h1>
            <p className="date">June 2019 - December 2019</p>
            <p className="important-text">Web Developer Intern</p>
            <p className="less-important-text">Code with Corgies</p>
          </div>
          <div className="education">
            <h1 className="big-text">EDUCATION</h1>
            <p className="date">2019</p>
            <p className="important-text">University of California, Berkeley</p>
            <p className="less-important-text">
              Full-Stack Web Development Bootcamp
            </p>
            <p className="date">2017-2019</p>
            <p className="important-text">Diablo Valley College</p>
            <p className="less-important-text">
              Associate's Degree, Computer Science
            </p>
          </div>
        </div>
        <div className="skills">
          <h1 className="big-text">SKILLS</h1>
          <p className="less-important-text">Front-End Development:</p>
          <p className="important-text">
            HTML5, CSS3, Javascript/ES6, AJAX, jQuery, React.js, React Native
          </p>
          <br className="break"></br>

          <p className="less-important-text">Back-End Development:</p>
          <p className="important-text">
            Node.js, Express.js, MySQL, MongoDB, Firebase, C++
          </p>

          <br className="break"></br>
          <p className="less-important-text">Deployment:</p>
          <p className="important-text">
            Heroku, AWS S3, CloudFront, Docker, Git
          </p>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
