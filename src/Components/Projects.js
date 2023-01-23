import React from "react";
import '../css/Projects.css';
import ProjectCard from "./ProjectCard";
import projects1 from '../Media/projects1.png'
import projects from "../Storage/projectsStorage";

function Projects({language}) {
  return (
    <div className="projects" id='projects'>
      <div>
      </div>
      <div className="projects-title-div">
        <img className="projects-img" alt='projects-img' src={projects1}  />
        <h2 className="projects-title">{language === 'ENGLISH' ? 'Projects' : 'Projetos'}</h2>
      </div>
      <div className="projects-cards-div has-scrollbar">
        {
          projects.map((p) => {
            return (
              <button onClick={() => window.open(p.link)} type="button" className="card-btn">
                <ProjectCard className="project-card" cardTitle={p.title} cardImg={p.img} />
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects