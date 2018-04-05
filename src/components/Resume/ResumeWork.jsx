import React from 'react';
import "../../styles/resume.css"

const ResumeWork = () => {
  return (
    <div>
      <div className="work">
        <h3><i className="fa fa-briefcase"></i>Work Experience</h3>
        <ul>
          <li><span>Front-End Intern</span>
            <br />
            <small>Jan 2018 - Mar 2018</small></li>
        </ul>
      </div>
      <div className="edu">
        <h3><i className="fa fa-graduation-cap"></i>Education</h3>
        <ul>
          <li><span>Department of Computer Science & Engineering</span>
            <br />
            <small>Sept 2013 - Jun 2017</small></li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeWork;
