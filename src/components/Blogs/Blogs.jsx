import React from 'react';
import BlogLevel1 from './BlogLevel1';
import BlogLevel2 from './BlogLevel2';
import BlogLevel3 from './BlogLevel3';
import '../../styles/blogs.css'

const Blogs = () => {
  return (
    <div className="container">
      <div id="portfolio">

        <h1 id="portfolio-heading">Welcome to my Blogs</h1 >
        <hr />

        <BlogLevel1 />
        <br />

        <BlogLevel2 />
        <br />

        <BlogLevel3 />
        <br />

      </div>
    </div>
  );
};

export default Blogs;
