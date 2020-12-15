import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Scroll, Element} from 'react-scroll';

const App = () =>{

  const scrollTo = (className) => {
    // smooth scolling
    const scroller = Scroll.scroller;
    scroller.scrollTo( className, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })
  }

  return(
    <div>

    <Element name="intro" className="element">
      <Intro />    
    </Element>

    <Element name="header" className="element sticky">
      <Header/>
    </Element>

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
  )
}
export default App;
