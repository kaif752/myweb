// components/ProjectsGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Phishing Simulation',
    tech: ['HTML', 'CSS', 'SQL', 'Docker', 'JavaScript', 'GoLang'],
    demo: 'https://ecommerce-demo.com',
    github: 'https://github.com/kaif/ecommerce-platform',
    description: 'Engineered a phishing simulation tool to assess employee security awareness, featuring realistic attack scenarios, detailed analytics, and automated reporting to strengthen organizational cybersecurity defenses.',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Task Management App',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    demo: 'https://taskmanager-demo.com',
    github: 'https://github.com/kaif/task-management',
    description: 'Productivity app with real-time collaboration features used by teams of 50+ members with offline support.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Social Media Dashboard',
    tech: ['React', 'GraphQL', 'Node.js'],
    demo: 'https://social-dashboard-demo.com',
    github: 'https://github.com/kaif/social-dashboard',
    description: 'Analytics platform processing 1M+ API requests daily with data visualization and reporting tools.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const ProjectsGrid = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={`project-${index}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;