// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Nirmal Singh</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button onClick={toggleDarkMode} className="dark-toggle">
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  );
};

export default Navbar;
