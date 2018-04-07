import React from 'react';
import Portfolio0 from "../../Images/Portfolio/Portfolio0.png";
import Responsive from "../../Images/Portfolio/responsive.png";
import RainbowRadium from "../../Images/Portfolio/rainbowradium.png";

const PortfolioItems = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://1am1mran.github.io/" target="_blank" rel="noopener noreferrer">
            <img src={Portfolio0} className="portfolio-img-hover" alt="" /></a>
          <div className="col-caption">
            <em>This is my first Portfolio made only using HTML and CSS. Even though it is my first portfolio, I still like it.
              Even most of it's content is Inspired by Codepen but I understand the whole code then itself. It was a great Experience
              working on it.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://mobileresponsiveapp.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer">
            <img src={Responsive} className="portfolio-img-hover" alt="" /></a>
          <div className="col-caption">
            <em>I made this sample App to reduce the effort of writing a code for mobile responsive. This conatins
              an Inout and an output board. I always wanted to create something which can reduce the pain for writing
            a mobile responsive code and with this I finally made it.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://rainbowradium.herokuapp.com/index.html" target="_blank" rel="noopener noreferrer" >
            <img src={RainbowRadium} className="portfolio-img-hover" alt="" />
          </a>
          <div className="col-caption">
            <em>I made this website as a learning tool. Although it is not yet completed but I learn many things while
              working on it. I made this site on Nov, 2017 but When I read it's code today, I felt(How bad code it is) but
              It was my learning phase(So, Its obvious you learn from mistakes).
            </em>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PortfolioItems;
