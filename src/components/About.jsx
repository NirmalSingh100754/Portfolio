// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m a passionate software developer with hands-on experience in full-stack web development, UI/UX design, and machine learning. I've worked on live projects as an intern and have a strong understanding of building scalable, responsive applications using React and modern JavaScript.
        </p>
        <p className="about-text">
          I enjoy solving real-world problems, optimizing user experiences, and collaborating with teams to deliver high-quality digital solutions. My goal is to keep learning, exploring new technologies, and building tools that make life easier.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
