import React from 'react';
import Blog1 from "../../Images/Blogs/blog1.png";
import Blog2 from "../../Images/Blogs/blog2.png";
import Blog3 from "../../Images/Blogs/blog3.png";

const BlogLevel1 = () => {
  return (
    <div className="row">

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/how-to-start-learning-front-end-development-from-scratch-53371d23f100" target="_blank"
            rel="noopener noreferrer">
            <img src={Blog1} alt="" className="portfolio-img-hover" /></a>
          <div className="col-caption">
            <em>
              This is the first blog which I have wrote about the UI development. I tried to share my experience about learning
              UI Development from scratch. I explaing the concept of UI with real world examples. I even Highlight some of the useful resources
              to learn Front-End tools.
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/i-love-failure-more-then-success-654fd35b84c" target="_blank"
            rel="noopener noreferrer">
            <img src={Blog2} alt="" className="portfolio-img-hover" /></a>
          <div className="col-caption">
            <em>
              If you belongs to the category of people wwho loves failure more than success, Then this blog is for you.
              Even I belong to that category, One of my own favourite quote is "I LOVE FAILURE MORE THAN SUCCESS, BECAUSE
              STRUGGLE TEACHES ALOT."
            </em>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="img-thumbnail rounded project-fitting">
          <a href="https://medium.com/@1am1mran/people-judge-your-character-by-looking-at-your-shoes-93d30366620c"
            target="_blank" rel="noopener noreferrer" >
            <img src={Blog3} alt="" className="portfolio-img-hover" />
          </a>
          <div className="col-caption">
            <em>
              When I was in my schooling days, One of my faculty said "People Judge your character, By looking at your shoes".
              So, I wrote a blog on it. I must recommend this blog.
            </em>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BlogLevel1;
