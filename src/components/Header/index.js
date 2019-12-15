import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="my-header">
      <div className="my-header-width">
        <div className="header-big-name">
          <h1>Shijir Bat</h1>
        </div>
        <div className="header-links">
          <div className="header-link">
            <a>About Me</a>
          </div>
          <div className="header-link">
            <a>Projects</a>
          </div>
          <div className="header-link">
            <a>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
