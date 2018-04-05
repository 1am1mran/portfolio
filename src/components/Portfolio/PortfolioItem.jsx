import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div>This is a Portfolio Item with id: {props.match.params.id}</div>
  );
};

export default PortfolioItem;
