import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="header">
          <p>PROJECTS</p>
          <hr className="line"></hr>
        </div>

        <div className="project-cards">
          <div className="project-card card1">
            <div className="card-front">
              <div className="card-title">
                <h2>codeHub</h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                <p>
                  A community for developers and recruiters to learn and connect
                </p>
              </div>
              <div className="card-button">
                <button>Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card2">
            <div className="card-front">
              <div className="card-title">
                <h2>Meal Music</h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript/jQuery</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                <p>Search restaurants accompanied with a relevant playlist</p>
              </div>
              <div className="card-button">
                <button>Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card3">
            <div className="card-front">
              <div className="card-title"></div>
              <div className="card-technologies"></div>
            </div>
            <div className="card-back">
              <div className="card-description"></div>
              <div className="card-button"></div>
            </div>
          </div>
          <div className="project-card card4">
            <div className="card-front">
              <div className="card-title"></div>
              <div className="card-technologies"></div>
            </div>
            <div className="card-back">
              <div className="card-description"></div>
              <div className="card-button"></div>
            </div>
          </div>
          <div className="project-card card5">
            <div className="card-front">
              <div className="card-title"></div>
              <div className="card-technologies"></div>
            </div>
            <div className="card-back">
              <div className="card-description"></div>
              <div className="card-button"></div>
            </div>
          </div>
          <div className="project-card card6">
            <div className="card-front">
              <div className="card-title"></div>
              <div className="card-technologies"></div>
            </div>
            <div className="card-back">
              <div className="card-description"></div>
              <div className="card-button"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
