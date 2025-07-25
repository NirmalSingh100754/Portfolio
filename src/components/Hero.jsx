// src/components/Hero.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Hero.css';
import profileImage from '../assets/profile.jpg'; // ✅ Add your image here

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Hi, I'm Nirmal Singh</h1>

        <h2 className="hero-typing">
          <TypeAnimation
            sequence={[
              'Software Developer 💻', 1800,
              'UI/UX Designer 🎨', 1800,
              'AI/ML Engineer 🤖', 1800,
              'Data Analyst 📊', 1800,
              'Agentic AI Developer🤖',1800,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="hero-description">
          Passionate about building modern web apps with clean UI, smart features, and delightful user experience.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-primary">Contact Me</Link>
          <a
            href="https://drive.google.com/file/d/1iWx8i9z9D-UGAT33VDgiJi82baSTHOu4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://leetcode.com/u/nirmal100754" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="icon" /> LeetCode
          </a>
          <a href="https://www.hackerrank.com/profile/221b252" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="icon" /> HackerRank
          </a>
          <a href="https://github.com/NirmalSingh100754" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImage} alt="Nirmal Singh" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
