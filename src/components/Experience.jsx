// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <motion.div
        className="experience-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="experience-title">Experience</h2>

        <div className="experience-item">
          <h3>Software Development Intern</h3>
          <p className="experience-company">DevFrame Studio · Apr 2025 – Present · Remote</p>
          <ul>
            <li>Developed customer-facing applications using React.js</li>
            <li>Built mobile/tablet responsive designs for production</li>
            <li>Focused on component reusability, clean design, and performance</li>
            <li>Delivered production code on-time for multiple clients</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Web Developer Intern</h3>
          <p className="experience-company">Octanet Services Pvt. Ltd. · Jun 2024 – Jul 2024 · Remote</p>
          <ul>
            <li>Built a web application using React.js</li>
            <li>Focused on layout, navigation, and performance</li>
            <li>
              <a
                href="https://drive.google.com/file/d/1sBVWtTIeIwQ2pYbbBjok-fSNkqSIvnfX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
