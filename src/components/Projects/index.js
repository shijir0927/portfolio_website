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
              <div className="card-title" id="VerbaMate">
                <h2>
                  <span className="card-title-text-1">VerbaMate</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>React Native</li>
                  <hr className="card-technologies-line"></hr>
                  <li>Node.js | Express.js</li>
                  <hr className="card-technologies-line"></hr>
                  <li>MongoDB</li>
                  <hr className="card-technologies-line"></hr>
                  <li>Google Cloud Storage</li>
                </ul>
              </div>
            </div>
            <div className="card-back verbamate-back">
              <div className="card-description">
                <p>
                  VerbaMate is an anonymous Q&A app made to be used as a new
                  social networking app for college students.
                </p>
              </div>
              <div className="card-button-big">
                <a
                  href="https://apps.apple.com/us/app/verbamate/id1497272076"
                  target="_blank"
                >
                  <button className="card-button">App Store Link</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card card2">
            <div className="card-front">
              <div className="card-title" id="Mongoose">
                <h2>
                  <span className="card-title-text-2">Mongoose Scraper</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>Javascript | jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Cheerio.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Node.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <div className="card-back mongoose-back">
              <div className="card-description">
                <p>
                  Gather, save, and post notes to trending NPR News articles.
                </p>
              </div>
              <div className="card-button-big">
                <a
                  href="https://sleepy-spire-06652.herokuapp.com/"
                  target="_blank"
                >
                  <button className="card-button">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card card3">
            <div className="card-front">
              <div className="card-title" id="CodeHub">
                <h2>
                  <span className="card-title-text-3">CodeHub</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>React.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Node.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>MongoDB</li>
                  <hr className="card-technologies-line"></hr>

                  <li>HTML5</li>
                </ul>
              </div>
            </div>
            <div className="card-back codehub-back">
              <div className="card-description">
                A community for developers and recruiters to learn and connect
                with vidoes, articles, events, and forum posts about tech.
              </div>
              <div className="card-button-big">
                <a
                  href="https://limitless-bayou-67971.herokuapp.com/"
                  target="_blank"
                >
                  <button className="card-button">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card card4">
            <div className="card-front">
              <div className="card-title" id="MealMusic">
                <h2>
                  <span className="card-title-text-4">Meal Music</span>
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
            <div className="card-back mealmusic-back">
              <div className="card-description">
                Search restaurants accompanied with a relevant playlist using
                Spotify and Yelp API.
              </div>
              <div className="card-button-big">
                <a
                  href="https://fredsgithubaccount.github.io/Meal-Music/#"
                  target="_blank"
                >
                  <button className="card-button">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card card5">
            <div className="card-front">
              <div className="card-title" id="Clicky">
                <h2>
                  <span className="card-title-text-5">Clicky Game</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>React.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>HTML5</li>
                  <hr className="card-technologies-line"></hr>

                  <li>CSS3</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                </ul>
              </div>
            </div>
            <div className="card-back clicky-back">
              <div className="card-description">
                A memory game made in React.js
              </div>
              <div className="card-button-big">
                <a href="https://clicky-game-7.herokuapp.com/" target="_blank">
                  <button className="card-button">Demo</button>
                </a>
              </div>
            </div>
          </div>
          <div className="project-card card6">
            <div className="card-front">
              <div className="card-title" id="Bamazon">
                <h2>
                  <span className="card-title-text-6">Bamazon</span>
                </h2>
              </div>
              <div className="card-technologies">
                <ul>
                  <li>Node.js</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Javascript/jQuery</li>
                  <hr className="card-technologies-line"></hr>

                  <li>MySQL</li>
                  <hr className="card-technologies-line"></hr>

                  <li>Command Line Interface</li>
                </ul>
              </div>
            </div>
            <div className="card-back bamazon-back">
              <div className="card-description">
                An amazon like app with product inventory in the command line
                interface.
              </div>
              <div className="card-button-big">
                <a href="https://github.com/shijir0927/bamazon" target="_blank">
                  <button className="card-button">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
