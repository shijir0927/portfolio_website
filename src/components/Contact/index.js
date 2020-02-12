import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="header">
        <p className="CONTACT">CONTACT</p>
        <hr className="line"></hr>
      </div>
      <div className="contact-icons">
        <div className="contact-icons-small">
          <a
            href="https://www.linkedin.com/in/shijirerdenebatenkh/"
            target="_blank"
          >
            <span className="spann my-icon">
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
          <a
            href="https://github.com/shijir0927"
            target="_blank"
            className="my-icon"
          >
            <span className="spann">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a
            href="mailto:shijiree_mng@yahoo.com"
            target="_blank"
            className="my-icon"
          >
            <span className="spann">
              <i class="fas fa-envelope-square"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="resume">
        <a
          href="https://drive.google.com/file/d/1fjQ8bvtsDSVQQVOp29dGOROAOP10RbGE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="my-resume"
        >
          <button className="get-resume">Get Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
