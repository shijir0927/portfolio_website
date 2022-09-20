import React from "react";
import "./style.css";
import * as Scroll from 'react-scroll';
import {Icon} from 'react-fa'
const Footer = () => {

  const scrollTo = (className) => {
    // smooth scolling
    const scroller = Scroll.scroller;
    scroller.scrollTo( className, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
  }

  return (
    <div className="my-footer">
      <div className="footer-up" onClick={()=>scrollTo('intro')}>
        <Icon name="angle-double-up"/>
      </div>
      <div className="footer-icons">
        <a className="footer-icon-container"
        href="https://github.com/shijir0927"
        target="_blank"
        rel="noopener noreferrer">
          <Icon name="github"/>
        </a>
        <a className="footer-icon-container"
            href="https://www.linkedin.com/in/shijirerdenebatenkh/"
            target="_blank"
            rel="noopener noreferrer">
          <Icon name="linkedin"/>
        </a>
        <a className="footer-icon-container"
        href="mailto:sbatenkh@ucdavis.edu"
        target="_blank"
        rel="noopener noreferrer">
          <Icon name="envelope"/>
        </a>
        <a className="footer-icon-container"
        href="https://drive.google.com/file/d/19VVY3adzCSqIQTb3f9-Tx73DHL3ronmN/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
          <Icon name="file"/>
        </a>
      </div>
      <div className="footer-name">
        <p>Designed and developed by Shijir Bat © {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
