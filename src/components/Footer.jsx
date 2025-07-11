import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Nirmal Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
