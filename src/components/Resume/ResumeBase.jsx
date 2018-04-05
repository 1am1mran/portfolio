import React from 'react';
import "../../styles/resume.css"
import ResumeProfile from "../../Images/profile.jpg";


const ResumeBase = () => {
  return (
    <div className="base">
      <div className="profile">
        <div className="photo"><img src={ResumeProfile} alt="" /></div>
        <div className="info">
          <h4 className="name">Abdul Imran</h4>
          <small className="job">Web Designer</small>
        </div>
      </div>
      <div className="about">
        <h3>About me</h3>I started learning front-end designing/developing 5 months back and I am loving it.
        <br />
        My basic goal is to became a Full Stack developer soon.
      </div>

      <div className="contact">
        <h3>Contact</h3>
        <div className="call"><i className="fa fa-phone"></i><span>+91 888-575-8583</span></div>
        <div className="address"><i className="fa fa-map-marker"></i><span>Hyderabad, Telangana.</span></div>
        <div className="website"><a href="https://1am1mran.github.io/" target="_blank" rel="noopener noreferrer"> <i className="fa fa-home"></i><span>1am1mran.github.io</span></a></div>
      </div>
    </div>
  );
};

export default ResumeBase;



