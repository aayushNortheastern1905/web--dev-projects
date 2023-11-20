// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyles.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
