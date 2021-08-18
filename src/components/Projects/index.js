import React from "react";
import "./style.css";
import ProjectCard from "./projectCard";
import {ProjectsInfo} from './projectsInfo';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="header">
          <p className="PROJECTSS">PROJECTS</p>
          <hr className="line"></hr>
        </div>

        <div className="project-cards">
          {ProjectsInfo.map(project=>{
            return <ProjectCard title={project.title} tech={project.tech} description={project.description}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
