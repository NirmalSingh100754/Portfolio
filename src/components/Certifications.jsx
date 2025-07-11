// src/components/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
  {
    title: 'Data Analytics Job Simulation',
    organization: 'Deloitte',
    date: 'Jul 2025',
    link: 'https://drive.google.com/file/d/1Z5KbPwvcS5eFSgp11M7nUobOOiaWDv7e/view?usp=sharing'
  },
  {
    title: 'Natural Language Processing for Developers',
    organization: 'Infosys Springboard',
    date: 'May 2025',
    link: 'https://drive.google.com/file/d/12sXGLX4seeTpWFDp-S6XBGkizQETL14S/view?usp=sharing'
  },
  {
    title: 'Machine Learning Foundation Certification',
    organization: 'Infosys Springboard',
    date: 'Nov 2024',
    link: 'https://drive.google.com/file/d/1MLMKDDgBoVO_aJcEWwfRhvNu9m--s7Az/view?usp=sharing'
  },
  {
    title: 'Machine Learning using Python',
    organization: 'Infosys Springboard',
    date: 'Nov 2024',
    link: 'https://drive.google.com/file/d/1mQBvuiRXdkzALv1WXgl2Funl7yUy_E_p/view?usp=sharing'
  }
];

const Certifications = () => {
  return (
    <section className="certifications">
      <motion.div
        className="certifications-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="certifications-title">Certifications</h2>
        <ul className="certification-list">
          {certifications.map((cert, idx) => (
            <li key={idx} className="certification-item">
              <h3>{cert.title}</h3>
              <p>{cert.organization} · {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Certifications;
