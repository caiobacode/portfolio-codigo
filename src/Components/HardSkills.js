import React from "react";
import HardSkillsCard from "./HardSkillsCard";

function HardSkills(props) {
  const {skills} = props;
  return (
    <div className="hard-div">
      {
        Object.keys(skills).map((s) => ( 
          <HardSkillsCard skills={skills[s]}/>
        ))
      }
    </div>
  )
}

export default HardSkills