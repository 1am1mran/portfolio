import React from 'react';
import PortfolioItems from './PortfolioItems';
import '../../styles/portfolio.css'

const Portfolio = () => {
  return (
    <div className="container">
      <div id="portfolio">
        <h1 id="portfolio-heading">Some of my Work..</h1 >
        <hr />
        <PortfolioItems />
      </div>
    </div>
  );
};

export default Portfolio;


