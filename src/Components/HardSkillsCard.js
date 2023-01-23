import React from "react";

function HardSkillsCard(props) {
  const { skills } = props
  const { tech, img, color, fontColor, margin} = skills
  return (
    <div style={{ backgroundColor: color}} className="hard-skills-card">
      <text style={{ color: fontColor, marginLeft: margin}} className="hard-skill-name">{tech}</text>
      <img className="hard-skills-img" src={img} alt="soft-skills-img"/>
    </div>
  )
}

export default HardSkillsCard