import React from "react";
import "./style.css";
import ProjectCard from "./projectCard";
import {ProjectsInfo} from './projectsInfo';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="header">
          <p className="PROJECTSS">PORTFOLIO</p>
          <hr className="line"></hr>
        </div>

        <div className="project-cards">
          {ProjectsInfo.map(project=>{
            return <ProjectCard 
                    title={project.title} 
                    tech={project.tech} 
                    description={project.description} 
                    coverImg={project.coverImg}
                    primaryColor={project.primaryColor}
                    secondaryColor={project.secondaryColor}
                    projectOwner={project.projectOwner}
                    year={project.year}
                    role={project.role}
                  />
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
