import React from "react";
import "./style.css";
import javascript from "../../images/javascript.png";
import node from "../../images/node.png";
import react from "../../images/react.png";
import mongologo from "../../images/mongologo.png";

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
            <p className="important-text">Full-Stack Web Developer</p>
            <p className="less-important-text">Code with Corgies</p>

            <p className="date">June 2020</p>
            <p className="important-text">Software Developer</p>
            <p className="less-important-text">CopernIQ</p>
          </div>
          <div className="education">
            <h1 className="big-text">EDUCATION</h1>

            <p className="date">2020-2022</p>
            <p className="important-text">University of California, Davis</p>
            <p className="less-important-text">
              Bachelor of Science, Mathematics
            </p>
            <p className="date">2019</p>
            <p className="important-text">University of California, Berkeley</p>
            <p className="less-important-text">
              Full-Stack Web Development Certificate
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
          <p className="less-important-text" id="skills-header">
            Front-End Development:
          </p>
          <p className="important-text">
            HTML5, CSS3/Flexbox/Grid, Sass, Javascript/ES6, Typescript, AJAX,
            jQuery, React.js, Gatsby.js, React Native, Redux, Jest
          </p>
          <br className="break"></br>

          <p className="less-important-text" id="skills-header">
            Back-End Development:
          </p>
          <p className="important-text">
            Node.js, Express.js, Java, C++, MySQL, MongoDB, Firebase, Docker,
            Postman, Strapi
          </p>

          <br className="break"></br>
          <p className="less-important-text" id="skills-header">
            Deployment:
          </p>
          <p className="important-text">
            Heroku, AWS S3, CloudFront, Google Cloud Platform, Git, Netlify
          </p>
          <br></br>
        </div>
      </div>
      <div className="skill-photos">
        <img src={javascript} alt="JS" className="skill-photo" />
        <img src={node} alt="JS" className="skill-photo" />
        <img src={react} alt="JS" className="skill-photo" />
        <img src={mongologo} alt="JS" className="skill-photo" />
      </div>
    </div>
  );
};

export default AboutMe;
