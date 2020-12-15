import React from "react";
import "./style.css";
import * as Scroll from 'react-scroll';

const Header = () => {

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
    <div className="my-header">
      <div className="my-header-width">
        <div className="header-links">
          <div className="header-link">
            <p onClick = {()=>scrollTo('intro')}>Home</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('aboutMe')}>About</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('projects')}>Projects</p>
          </div>
          <div className="header-link">
            <p onClick = {()=>scrollTo('contact')}>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
