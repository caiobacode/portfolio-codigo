import React, { useState } from "react";
import '../css/Skills.css';
import skills from '../Media/projects2.png'
import SoftSkills from "./SoftSkills";
import softArray from "../Storage/SoftStorage";
import HardSkills from "./HardSkills";
import hardArray from "../Storage/HardStorage";

function Skills({language}) {
  const [hardDisabled, setHardDisabled] = useState(true)
  return (
    <div className="skills" id='skills'>
      <div className="skills-btns">
        <button 
        onClick={() => setHardDisabled(false)} 
        type="button" 
        disabled={!hardDisabled} 
        className="soft-btn">
          Soft Skills
        </button>
        <button 
        onClick={() => setHardDisabled(true)} 
        type="button" 
        disabled={hardDisabled} 
        className="hard-btn">
          Hard Skills
        </button>
      </div>
      <div className="skills-content">
        {
          !hardDisabled ? (
            <div className="ski-sof-div">
              {
                softArray.map((s) => ( <SoftSkills lan={language} skills={s} />))
              }
            </div>
          )
          :
          (
            <div className="ski-har-div">
              {
                hardArray.map((s) => ( <HardSkills lan={language} skills={s} />))
              }
            </div>
          )
        }
      </div>
      <div className="skills-title-div">
        <img className="skills-img" alt='skills-img' src={skills}  />
        <h2 className="skills-title">Skills</h2>
      </div>
    </div>
  )
}

export default Skills