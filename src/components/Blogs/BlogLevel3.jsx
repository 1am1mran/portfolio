import React from 'react';
import Blog7 from "../../Images/Blogs/blog7.png";
import Blog10 from "../../Images/Blogs/blog10.png";
import Blog9 from "../../Images/Blogs/blog9.png";

const BlogLevel3 = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/introverts-a-personality-to-be-considered-f12ee503f584"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog7} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              Are you an Introvert?, Then You must have a look at this blog. I tried to explain how special Introvert's are,
              and also Displayed so of the Most successful Introverts around the Globe.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/a-mute-lover-33f2d15a2d99"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog10} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              The first ever love story i've ever wrote. It's an Intresting attempt to show how a boy can't express his love
              towards a girl.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/my-love-story-b0271b1c0540"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog9} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              Yet another love story. It's a dark and Intense love story, i woul definetly recommend you to read this awesome
              love story atleast once.
            </em>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogLevel3;
