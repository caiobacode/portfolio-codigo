import React from "react";
import SoftSkillsCard from "./SoftSkillsCard";

function SoftSkills(props) {
  const {skills, lan} = props
  return (
    <div className="soft-div">
      {
        Object.keys(skills).map((s) => ( 
          <SoftSkillsCard 
          title={lan === 'ENGLISH' ?  skills[s].title : skills[s].ptTitle} 
          img={skills[s].img}
          />
        ))
      }
    </div>
    
  )
}

export default SoftSkills