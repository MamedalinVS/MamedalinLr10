import React from 'react';
import './Block.css';

const Block = ({ title, description, image }) => {
  return (
    <div className="block">
      <img src={image} alt={title} className="block-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Block;
