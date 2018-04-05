import React from 'react';
import "../../styles/resume.css"

const ResumeIntrests = () => {
  return (
    <div className="intrests">
      <h3><i className="fa fa-heart"></i>Interests</h3>
      <div className="interests-items">
        <div className="movie"><i className="fa fa-film"></i><span>Movie</span></div>
        <div className="music"><i className="fa fa-headphones"></i><span>Music</span></div>
        <div className="game"><i className="fa fa-gamepad"></i><span>Game</span></div>
        <div className="writing"><i className="fa fa-pencil"></i><span>Writing</span></div>
        <div className="discussion"><i className="fa fa-group"></i><span>Discussing Ideas</span></div>
      </div>
    </div>
  );
};

export default ResumeIntrests;
