// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'AI YouTube Title & Description Generator',
    link: 'https://drive.google.com/drive/folders/1ngKBRECbzWyS83bl80Lmo02ypU2fOIaU',
    description:
      'Designed and implemented an automated content generation pipeline using n8n and OpenAI API, enabling creators to generate optimized YouTube video titles and descriptions based on minimal input (e.g., topic or script).\n\nAchieved 80% reduction in manual content writing time, while improving content quality and consistency through custom prompt templates tailored for audience engagement and SEO.',
  },
  {
    title: 'Blaze Herbel (Internship Project)',
    link: 'https://blaze-herbals-3cc9ff5116e57dc9fb0c.o2.myshopify.dev/',
    description:
      'A digital storefront for herbal product sales, developed during my internship using React.js, TailwindCSS, and Shopify backend APIs.\n\nWorked on implementing product listing, cart functionality, dynamic routing, and responsive UI, gaining strong hands-on experience with real-world e-commerce systems.',
  },
  {
    title: 'Chauffeurs Website Clone (UI/UX Project)',
    link: 'https://original-series-510821.framer.app/',
    description:
      'A precise UI/UX clone of the official Chauffeurs website built using Framer.\n\nFocused on pixel-perfect layout, advanced animations, and smooth interactive elements to strengthen my skills in component hierarchy, UX flow, and mobile-first design.',
  },
  {
    title: 'Wardrobe Assistant',
    link: 'https://github.com/NirmalSingh100754/Wardrobe-Assistant',
    description:
      'An AI-powered smart wardrobe app for generating outfit combinations and virtual try-ons.\n\nBuilt using React and TensorFlow.js, the assistant recommends outfit matches based on clothing type, user preferences, and weather conditions — enabling a personalized fashion experience.',
  },
  {
    title: 'Virtual Meeting Assistant',
    link: 'https://github.com/NirmalSingh100754/Virtual-Meeting-Assistant.git',
    description:
      'An AI-based assistant that automatically captures meeting summaries and extracts action points from recorded conversations using NLP techniques.\n\nDesigned for remote teams, it enhances productivity by eliminating manual note-taking and supporting post-meeting task tracking.',
  },
  {
    title: 'Bus Reservation System',
    link: 'https://github.com/NirmalSingh100754/bus_reservation_system',
    description:
      'A desktop application built using Python and Tkinter with a MySQL backend to manage bus bookings.\n\nSupports seat selection, fare calculations, and cancellation features — ideal for learning full-stack desktop app development.',
  },
  {
    title: 'My Weather',
    link: 'https://weather-app-nirmal-singh.vercel.app/',
    description:
      'My first weather application created using React and OpenWeather API.\n\nLearned how to fetch real-time data from APIs, handle loading states, and build clean responsive UI components with dynamic updates.',
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
              {project.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
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
