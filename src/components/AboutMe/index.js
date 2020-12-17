import React from "react";
import "./style.css";
import javascript from "../../images/javascript.png";
import node from "../../images/node.png";
import react from "../../images/react.png";
import mongologo from "../../images/mongologo.png";
import Shijir from "../../images/shijir.JPG";
import { ParallaxButton, ParallaxWrapper} from 'react-parallax-button';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="header">
        <p className="ABOUT-ME">ABOUT</p>
        <hr className="line"></hr>
      </div>
      <br></br>
      <div className="about-me-wrapper">
        <div className = 'about-me-section'>
          <p>Hello, I'm Shijir. I'm a third year computer science student at <span className = 'orange'>University of California, Davis</span>.</p>
          <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. Also, I love things that are built to work reliably, whilst at the same time charm its users with its <span className = 'orange'>aesthetic look</span> and <span className = 'orange'>ease of use</span>.</p>
          <p>Here are a few technologies I've been working with recently:</p>

          <div className = 'about-me-skills'>
            <div className = 'about-me-skill skill-1'>
              <p>▹ Typescript</p>
            </div>

            <div className = 'about-me-skill skill-2'>
              <p>▹ React/Redux</p>
            </div>

            <div className = 'about-me-skill skill-3'>
              <p>▹ Node/Express</p>
            </div>

            <div className = 'about-me-skill skill-4'>
              <p>▹ CSS/Sass</p>
            </div>

            <div className = 'about-me-skill skill-5'>
              <p>▹ Gatsby.js</p>
            </div>

            <div className = 'about-me-skill skill-6'>
              <p>▹ Docker</p>
            </div>
          </div>
        </div>

        <div className = 'about-me-image'>
          <ParallaxWrapper parallaxScale={0.25}>
            <img src = {Shijir} alt="shijir" className = "shijir-image"/>
          </ParallaxWrapper>
        </div>

        {/* <div className="skills">
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
        </div> */}
      </div>

      <div className="about-me-wrapper">
        <div className="experience-and-education">
            <div className="experience">
              <h1 className="big-text">EXPERIENCE</h1>

              <p className="date">November 2020</p>
              <p className="important-text">Front-End Developer</p>
              <p className="less-important-text">Breathe Mongolia</p>

              <p className="date">June 2020 - December 2020</p>
              <p className="important-text">Software Developer</p>
              <p className="less-important-text">CopernIQ</p>

              <p className="date">June 2019 - December 2019</p>
              <p className="important-text">Full-Stack Developer</p>
              <p className="less-important-text">Code with Corgies</p>
            </div>
            <div className="education">
              <h1 className="big-text">EDUCATION</h1>

              <p className="date">2022</p>
              <p className="important-text">University of California, Davis</p>
              <p className="less-important-text">
                B.S, Mathematics and Computer Science
              </p>
              <p className="date">2019</p>
              <p className="important-text">University of California, Berkeley</p>
              <p className="less-important-text">
                Full-Stack Web Development Certificate
              </p>
            </div>
        </div>
        <div className = "skill-icons">

        </div>
      </div>
      {/* <div className="skill-photos">
        <img src={javascript} alt="JS" className="skill-photo" />
        <img src={node} alt="JS" className="skill-photo" />
        <img src={react} alt="JS" className="skill-photo" />
        <img src={mongologo} alt="JS" className="skill-photo" />
      </div> */}
    </div>
  );
};

export default AboutMe;
