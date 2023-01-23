import React from "react";

function SoftSkillsCard(props) {
  const { title, img} = props
  return (
    <div className="soft-skills-card">
      <p className="soft-skill-name">{title}</p>
      <img className="soft-skills-img" src={img} alt="soft-skills-img"/>
    </div>
  )
}

export default SoftSkillsCard