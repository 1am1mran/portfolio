import React from 'react';
import Blog7 from "../../Images/Blogs/blog7.png";
import Blog8 from "../../Images/Blogs/blog8.png";

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
          <a href="#"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog8} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              Working on some other blogs. You can suggest me an Idea or topic to write a blog On, Thank You!
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="#"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog8} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              Working on some other blogs. You can suggest me an Idea or topic to write a blog On, Thank You!
            </em>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogLevel3;
