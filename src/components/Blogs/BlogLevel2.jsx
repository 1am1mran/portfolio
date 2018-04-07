import React from 'react';
import Blog4 from "../../Images/Blogs/blog4.png";
import Blog5 from "../../Images/Blogs/blog5.png";
import Blog6 from "../../Images/Blogs/blog6.png";

const BlogLevel2 = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/am-i-living-in-a-wrong-dimensions-of-realities-79d04b6e8f4a"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog4} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              This is one of my favourite and successful blog because it was read by many people. I tried to highlight whats
              wrong with the people on Planet earth.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/90s-2005-a-golden-era-to-be-remember-be99a78895bc"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog5} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              Are You a 90's Kid?, Then Go on this blog is for you, Enough said.
              Even if you are not a 90's kid, You gonna love this blog(Hopefully).
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/philosopher-in-me-f9f0a9d560de"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog6} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              This is my first blog ever. I don't even knew how to write blogs when I started this one. I tried to show cast
              the Philosopher in Me.
            </em>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BlogLevel2;
