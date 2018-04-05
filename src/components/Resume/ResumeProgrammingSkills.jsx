import React from 'react';
import "../../styles/resume.css"

const ResumeProgrammingSkills = () => {
  return (
    <div className="skills-prog">
      <h3><i className="fa fa-code"></i>Programming Skills</h3>
      <ul>
        <li data-percent="92" className="container"><span>HTML5</span>
          <div className="skills-bar">
            <div className="bar html"></div>
          </div>
        </li>
        <li data-percent="96" className="container"><span>CSS3</span>
          <div className="skills-bar">
            <div className="bar css"></div>
          </div>
        </li>
        <li data-percent="40" className="container"><span>JavaScript</span>
          <div className="skills-bar">
            <div className="bar js"></div>
          </div>
        </li>
        <li data-percent="60" className="container"><span>jQuery</span>
          <div className="skills-bar">
            <div className="bar jquery"></div>
          </div>
        </li>
        <li data-percent="33" className="container"><span>Reactjs</span>
          <div className="skills-bar">
            <div className="bar react"></div>
          </div>
        </li>

        <li data-percent="20" className="container"><span>Bootstrap</span>
          <div className="skills-bar">
            <div className="bar bootstrap"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ResumeProgrammingSkills;
