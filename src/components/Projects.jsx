// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Blaze Herbel (Internship Project)',
    link: 'https://blaze-herbals-3cc9ff5116e57dc9fb0c.o2.myshopify.dev/',
    description: 'A digital platform for herbal product sales with frontend/backend features using React.js and TailwindCSS.',
  },
  {
    title: 'Chauffeurs Website Clone (UI/UX Project)',
    link: 'https://original-series-510821.framer.app/',
    description: 'UI/UX clone of the official Chauffeurs website built in Framer with layout precision and smooth interaction.',
  },
  {
    title: 'Wardrobe Assistant',
    link: 'https://github.com/NirmalSingh100754/Wardrobe-Assistant',
    description: 'A smart outfit assistant using AI for virtual try-ons and size-fit recommendations.',
  },
  {
    title: 'Virtual Meeting Assistant',
    link: 'https://github.com/NirmalSingh100754/Virtual-Meeting-Assistant.git',
    description: 'AI-based tool to automatically capture meeting notes and extract actionable tasks using NLP.',
  },
  {
    title: 'Bus Reservation System',
    link: 'https://github.com/NirmalSingh100754/bus_reservation_system',
    description: 'A Python GUI app with MySQL backend for booking, canceling, and managing bus reservations.',
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <motion.div
        className="projects-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="projects-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
