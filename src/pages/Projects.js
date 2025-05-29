import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Phishing Simulation App",
    description:
      "A MERN stack app that simulates phishing emails and tracks user responses.",
    image: "/images/phishing-app.png",
    github: "https://github.com/yourusername/phishing-app",
    demo: "https://phishing-app-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio using React, Tailwind CSS, and Framer Motion.",
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce site with shopping cart, auth, and Stripe integration.",
    image: "/images/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "Certificate Validator",
    description:
      "Node.js + React app for validating certificates with QR scan and MySQL backend.",
    image: "/images/cert-validator.png",
    github: "https://github.com/yourusername/cert-validator",
    demo: "https://cert-validator-demo.vercel.app",
  },
  {
    title: "Chat App",
    description:
      "Real-time chat using Socket.IO and JWT auth with MongoDB.",
    image: "/images/chat-app.png",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.vercel.app",
  },
  {
    title: "Weather Dashboard",
    description:
      "Responsive weather dashboard using OpenWeather API and animated charts.",
    image: "/images/weather.png",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white"
      >
        Recent Projects
      </motion.h3>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-purple-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
