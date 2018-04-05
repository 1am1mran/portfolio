import React from 'react';
import AboutSkills from './AboutSkills'
import AboutProfile from "../../Images/profile.jpg";
import '../../styles/about.css'

const AboutHeader = () => {
  return (
    <div>
      <section className="center-align container" id="about">
        <h1>Abdul Imran</h1>
        <h3>Web Developer</h3>
        <aside className="center-align">
          <img id="profile-img" className="img-circle" src={AboutProfile} alt="About-Profile" />
          <h4 id="flow-text">Hey there, Myself Abdul Imran. I'm a computer Science graduated, 2017 batch.
          From the past few months I have been learning Front-End development and currently I'm looking for
          a Jr. Position for front-end side.</h4>
        </aside>
        <AboutSkills />
      </section>
    </div>
  );
};

export default AboutHeader;
