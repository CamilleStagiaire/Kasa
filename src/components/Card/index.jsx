import React from 'react';

const Card = ({ title, picture }) => {
  return (
    <article className="card">
      <img src={picture} alt={title} />
      <h3>{title}</h3>
    </article>
  );
};

export default Card;