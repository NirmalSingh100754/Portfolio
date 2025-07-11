// src/components/Hero.jsx
import React from 'react';
import Typical from 'react-typical';
import { motion } from 'framer-motion';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Hi, I'm Nirmal Singh</h1>

        <h2 className="hero-typing">
          <Typical
            steps={[
              'Software Developer 💻', 1500,
              'UI/UX Designer 🎨', 1500,
              'Data Analyst 📊', 1500,
              'ML Enthusiast 🤖', 1500,
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h2>

        <p className="hero-description">
          Passionate about building modern web apps with clean UI, smart features, and delightful user experience.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="https://drive.google.com/file/d/1sBVWtTIeIwQ2pYbbBjok-fSNkqSIvnfX/view?usp=sharing"
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
    </section>
  );
};

export default Hero;
