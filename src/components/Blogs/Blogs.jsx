import React from 'react';
import Blog1 from "../../Images/Blogs/blog1.png";
import Blog2 from "../../Images/Blogs/blog2.png";
import Blog3 from "../../Images/Blogs/blog3.png";
import Blog4 from "../../Images/Blogs/blog4.png";
import Blog5 from "../../Images/Blogs/blog5.png";
import Blog6 from "../../Images/Blogs/blog6.png";
import Blog7 from "../../Images/Blogs/blog7.png";
import Blog8 from "../../Images/Blogs/blog8.png";
import '../../styles/blogs.css'

const Blogs = () => {
  return (
    <div className="container">
      <div id="portfolio">

        <h1 id="portfolio-heading">Welcome to my Blogs</h1 >

        <hr />
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

        <br />

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
        <br />

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
                <em></em>
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
                <em></em>
              </div>
            </div>
          </div>

        </div>
        <br />
      </div>
    </div>
  );
};

export default Blogs;
