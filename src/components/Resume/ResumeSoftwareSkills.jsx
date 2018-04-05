import React from 'react';
import resume from "../../styles/resume.css"

const ResumeSoftwareSkills = () => {
  return (
    <div className="skills-soft">
      <h3><i class="fa fa-th-list"></i>Software Skills</h3>
      <ul>

        <li data-percent="94">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Visual Studio</span><small></small>
        </li>

        <li data-percent="80">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Illustrator</span><small></small>
        </li>

        <li data-percent="89">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Sublime Text</span><small></small>
        </li>

        <li data-percent="55">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Dreamweaver</span><small></small>
        </li>

      </ul>
    </div>
  );
};

export default ResumeSoftwareSkills;
