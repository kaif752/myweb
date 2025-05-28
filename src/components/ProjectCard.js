// components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-purple-400 dark:hover:shadow-purple-500 transition-all"
      whileHover={{ scale: 1.03 }}
    >
      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Tech Stack: {project.tech.join(', ')}
      </p>
      <div className="flex gap-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-full text-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-700"
          >
            <FaGithub />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
