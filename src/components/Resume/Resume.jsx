import React from 'react';
import ResumeBase from './ResumeBase';
import ResumeWork from './ResumeWork';
import ResumeProgrammingSkills from './ResumeProgrammingSkills';
import ResumeIntrests from './ResumeIntrests';

const Resume = () => {
  return (
    <div className="resume" >

      <ResumeBase />
      <div className="func" >

        <ResumeWork />

        <ResumeProgrammingSkills />

        <ResumeIntrests />
      </div>
    </div>

  );
};

export default Resume;
