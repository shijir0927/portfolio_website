import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
