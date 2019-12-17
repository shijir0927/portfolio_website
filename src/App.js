import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
