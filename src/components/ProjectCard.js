// components/ProjectCard.js
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col border border-gray-200 dark:border-gray-700"
    >
      <div className="relative pt-[56.25%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={`tech-${i}`}
              className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="px-6 pb-4 flex gap-3">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectCard;