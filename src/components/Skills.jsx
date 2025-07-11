// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Python',
  'Java', 'SQL', 'MongoDB', 'Machine Learning',
  'Computer Vision', 'UI/UX Design', 'Git',
  'Numpy & Pandas', 'Data Analysis', 'SDLC', 'Tableau'
];

const Skills = () => {
  return (
    <section className="skills">
      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="skills-title">Skills & Tools</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
