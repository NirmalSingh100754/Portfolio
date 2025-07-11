// src/components/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <motion.div
        className="education-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="education-title">Education</h2>

        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p className="education-meta">Jaypee University of Engineering and Technology · Guna, India</p>
          <p className="education-meta">Aug 2022 – Present · CGPA: 8.6</p>
        </div>

        <div className="education-item">
          <h3>Higher Secondary School Certificate (12th, ISC)</h3>
          <p className="education-meta">St. Francis School · Ramnagar, India</p>
          <p className="education-meta">Apr 2020 – Apr 2021 · Percentage: 83%</p>
        </div>

        <div className="education-item">
          <h3>Secondary School Certificate (10th, ICSE)</h3>
          <p className="education-meta">St. Francis School · Ramnagar, India</p>
          <p className="education-meta">Apr 2018 – Apr 2019 · Percentage: 80.6%</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
