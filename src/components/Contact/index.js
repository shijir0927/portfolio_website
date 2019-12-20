import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <div className="header">
        <p>CONTACT</p>
        <hr className="line"></hr>
      </div>
      <div className="contact-icons">
        <div className="contact-icons-small">
          <a
            href="https://www.linkedin.com/in/shijirerdenebatenkh/"
            target="_blank"
          >
            <span className="spann">
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
          <a href="https://github.com/shijir0927" target="_blank">
            <span className="spann">
              <i class="fab fa-github"></i>
            </span>
          </a>
          <a href="mailto:shijiree_mng@yahoo.com" target="_blank">
            <span className="spann">
              <i class="fas fa-envelope-square"></i>
            </span>
          </a>
          <a href="tel:+19258548206" target="_blank">
            <span className="spann">
              <i class="fas fa-phone"></i>
            </span>
          </a>
        </div>
      </div>
      <div className="resume">
        <a
          href="Shijir_Resume.pdf"
          target="_blank"
          download="Shijir_Resume.pdf"
          rel="noopener noreferrer"
        >
          <button className="get-resume">Get Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
