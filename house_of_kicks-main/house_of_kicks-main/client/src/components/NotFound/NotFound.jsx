import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="btn-back-home">Back to Home</Link>
      </div>
      <div className="sneaker-image">
        {/* You can add an image of a sneaker or any sneaker-related illustration */}
        <img src="sneaker_image_url_here" alt="Sneaker Illustration" />
      </div>
    </div>
  );
};

export default NotFound;
