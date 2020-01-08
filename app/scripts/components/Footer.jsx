/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const Footer = () => (
  <footer className="app-footer">
    <div className="app-footer-logo">
      <div className="logo-section">
        <div>
          <img
            className="logo-content"
            src={require('assets/media/images/croissant.png')}
            alt=""
          />
        </div>
      </div>
      <span className="text-section">© 2018 Croissant - Made with ❤️ in 🌍</span>
    </div>
  </footer>
);

export default Footer;
