import React from "react";
import '../css/Projects.css';

function ProjectCard(props) {
  const { cardTitle, cardImg } = props
  return (
    <div className="project-card-div">
      <div className="card-img-div">
        <img className="card-img" alt='card-img' src={cardImg} />
      </div>
      <div className="card-title-div">
        <h1 className="card-title">{cardTitle}</h1>
      </div>
    </div>
  )
}

export default ProjectCard