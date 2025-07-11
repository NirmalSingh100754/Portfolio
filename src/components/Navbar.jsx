// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Detect system preference or saved theme
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [menuOpen, setMenuOpen] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Close menu when resizing above mobile width
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-title">Nirmal Singh</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
        <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/certifications" onClick={() => setMenuOpen(false)}>Certifications</Link>
        <Link to="/education" onClick={() => setMenuOpen(false)}>Education</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
