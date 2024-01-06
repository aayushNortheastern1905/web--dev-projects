// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
            <h1>Join the HypeBeast Army now!</h1>
            <i class="footer-icon fab fa-instagram"></i>
            <i class="footer-icon fab fa-facebook-f"></i>
            <i class="footer-icon fab fa-twitter"></i>
            <a class="email-button" href="mailto:houseofkicks67@gmail.com">
                <i class="footer-icon fas fa-envelope"></i>
            </a>

            <p>©House Of Kicks</p>
        </footer>
    );
};

export default Footer;
