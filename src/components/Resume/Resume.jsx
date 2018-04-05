import React from 'react';
import ResumeBase from './ResumeBase';
import ResumeWork from './ResumeWork';
import ResumeProgrammingSkills from './ResumeProgrammingSkills';
// import ResumeSoftwareSkills from './ResumeSoftwareSkills';
import ResumeIntrests from './ResumeIntrests';

const Resume = () => {
  return (
    <div className="resume" >

      <ResumeBase />
      <div className="func" >

        <ResumeWork />

        <ResumeProgrammingSkills />

        {/* <ResumeSoftwareSkills /> */}

        <ResumeIntrests />
      </div>
    </div>

  );
};

export default Resume;
