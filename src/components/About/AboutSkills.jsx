import React from 'react';
import '../../styles/about.css'
import HTML from "../../Images/About/html5.svg";
import CSS from "../../Images/About/css-3.svg";
import JS from "../../Images/About/javascript.svg";
import Reactjs from "../../Images/About/react.svg";

const AboutSkills = () => {
  return (
    <div className="container-fluid" >
      <h2 className="skills" >SKILLS</h2>
      <div className="row">
        <div className="col-md-3">
          <div>
            <img src={HTML} alt="HTML" width="100%" className="img-responsive" id="skills-img" />
            <div className="caption">
              <p>I have been working with HTML since pretty good time now.
                I can comfortably work with it Irrespective of the requirements.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div>
            <img src={CSS} alt="CSS" width="100%" className="img-responsive" id="skills-img" />
            <div className="caption">
              <p>Same as HTML, CSS goes along with HTML. I love to present the DOM neat and atractive
                by using the proper Styling.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div>
            <img src={JS} alt="JS" width="100%" className="img-responsive" id="skills-img" />
            <div className="caption">
              <p>Java Script is currently one of favourite Language for many Developers out there. Initially I was
                struggling with the Language but I can say that the more time you give to JS the more
                you gonna Love it. This language is beyond awesome.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div>
            <img src={Reactjs} alt="Reactjs" width="100%" className="img-responsive" id="skills-img" />
            <div className="caption">
              <p>React is my favourite JS framwork/Library. Even though I have very less knowledge of
                other frameworks, React.js attracts me more then any other frame work. Thanks to facebook
                for such an Awesome UI component based framework.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSkills;
