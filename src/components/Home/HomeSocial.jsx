import React from 'react';
import { SocialIcon } from 'react-social-icons';

const HomeSocail = () => {
  return (
    <div>
      <div className="container-fluid socail-main">
        <div className="row" >
          <div className="col-sm-12" >
            <SocialIcon url="http://twitter.com/1am1mran" />
            <SocialIcon url="https://www.linkedin.com/in/1am1mran/" />
            <SocialIcon url="https://github.com/1am1mran" />
            <SocialIcon url="https://www.instagram.com/1am_1mran/" />
            <SocialIcon url="https://www.facebook.com/1am1mran" />
            <SocialIcon url="https://medium.com/@1am1mran" />
            <SocialIcon url="https://codepen.io/1am1mran/" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeSocail;
