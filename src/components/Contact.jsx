// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">I'd love to connect! Here's how you can reach me:</p>

        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:nirmalsingh9972@gmail.com">nirmalsingh9972@gmail.com</a></p>
          <p><strong>Phone:</strong> +91 9565469972</p>
          <p><strong>Location:</strong> Mirzapur, Uttar Pradesh, India</p>
        </div>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/nirmal-singh100754/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/NirmalSingh100754" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://leetcode.com/u/nirmal100754" target="_blank" rel="noopener noreferrer">
            LeetCode
          </a>
          <a href="https://www.hackerrank.com/profile/221b252" target="_blank" rel="noopener noreferrer">
            HackerRank
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
