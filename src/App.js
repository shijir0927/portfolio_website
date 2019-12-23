import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { render } from "react-dom";
import { withGetScreen } from "react-getscreen";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container"
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    // Tried to use react-getscreensize but it wasn't necessary
    // if (this.props.isMobile())
    //   return (
    //     <div>
    //       <Header />
    //       <Intro />
    //       <AboutMe />
    //       <Projects />
    //       <Footer />
    //     </div>
    //   );
    return (
      <div>
        <Element name="top" className="top">
          <div></div>
        </Element>
        <div className="my-header">
          <div className="my-header-width">
            <div className="header-name-icons">
              <div className="header-big-name">
                <Link
                  activeClass="active"
                  className="top"
                  to="top"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  SHIJIR-ERDENE BAT-ENKH
                </Link>
              </div>
              <div className="header-icons">
                <a class="header-icon"></a>
                <a class="header-icon"></a>
              </div>
            </div>
            <div className="header-links">
              <div className="header-link">
                <Link
                  activeClass="active"
                  className="aboutMe"
                  to="aboutMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Me
                </Link>
              </div>
              <div className="header-link">
                <Link
                  activeClass="active"
                  className="projectss"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </div>
              <div className="header-link">
                <Link
                  activeClass="active"
                  className="contact"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Intro />
        <Element name="aboutMe" className="element">
          <AboutMe />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
