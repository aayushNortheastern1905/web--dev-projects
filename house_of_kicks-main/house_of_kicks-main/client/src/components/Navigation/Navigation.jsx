import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { logout } from '../../api/api';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import routes from '../../Routes';

const Navigation = ({ onSearchChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  const handleLogout = async () => {
    const isLogOut = await logout(); 
    if (isLogOut === true) {
      localStorage.clear();
      window.location.href = routes.base;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-font">
          <img src="https://drive.google.com/uc?id=1qiDDnWjhOSoM7zwuM3Ag29oS83N9hu-D" alt="icon" height={60} width={60} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Sneakers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
          </ul>

          <form className="d-flex flex-grow-2 justify-content-end align-items-center">
            <input
              type="text"
              className="form-control me-5 search-shoes-input"
              placeholder="Search"
              onChange={onSearchChange}
            />
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                <FaShoppingCart />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item" onClick={() => setShowLogoutConfirmation(true)}>
            <button
            className="logout-button"
            style={{ backgroundColor: '#050D14', color: 'white', border: '1px solid white' }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
