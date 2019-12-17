import React from "react";
import "./style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="my-header">
      <div className="my-header-width">
        <div className="header-name-icons">
          <div className="header-big-name">
            <a>Shijir-Erdene Bat-Enkh</a>
          </div>
          <div className="header-icons">
            <a class="header-icon"></a>
            <a class="header-icon"></a>
          </div>
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
