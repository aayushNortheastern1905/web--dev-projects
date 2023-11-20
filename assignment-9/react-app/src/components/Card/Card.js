// Card.js
import React from 'react';
import './cardStyles.css'; // Import the CSS file

const Card = ({ title, content }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      {/* Create more Card components as needed */}
    </div>
  );
};

export default Card;
