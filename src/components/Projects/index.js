import React from "react";
import "./style.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="header">
          <p className="PROJECTSS">PROJECTS</p>
          <hr className="line"></hr>
        </div>

        <div className="project-cards">
          <div className="project-card card1">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">codeHub</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>React.js</li>
                  <hr className="card-technologies-line"></hr>
                  <li>Node.js | Express.js</li>
                  <hr className="card-technologies-line"></hr>
                  <li>MongoDB</li>
                  <hr className="card-technologies-line"></hr>
                  <li>CSS Grid</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                <p>
                  A community for developers and recruiters to learn and connect
                </p>
              </div>
              <div className="card-button-big">
                <button className="card-button">Source Code</button>
              </div>
            </div>
          </div>
          <div className="project-card card2">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">Meal Music</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3 | Flexbox</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                <p>Search restaurants accompanied with a relevant playlist</p>
              </div>
              <div className="card-button-big">
                <button className="card-button">Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card3">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">Project</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                Visualize the most popular sorting algorithms
              </div>
              <div className="card-button-big">
                <button className="card-button">Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card4">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">Project</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                Visualize the path finding algorithms
              </div>
              <div className="card-button-big">
                <button className="card-button">Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card5">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">GreenBay Cleaning</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                A website for home cleaning company
              </div>
              <div className="card-button-big">
                <button className="card-button">Demo</button>
              </div>
            </div>
          </div>
          <div className="project-card card6">
            <div className="card-front">
              <div className="card-title">
                <h2>
                  <span className="card-title-text">HostIt</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div className="card-back">
              <div className="card-description">
                Real-time event hosting mobile app.
              </div>
              <div className="card-button-big">
                <button className="card-button">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
