import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiCode } from "react-icons/fi";

const projects = [
  {
    title: "Phishing Simulation App",
    description:
      "A comprehensive security training platform that simulates phishing campaigns with detailed analytics to educate employees about cybersecurity threats.",
    image: "/images/phishing-app.png",
    github: "https://github.com/yourusername/phishing-app",
    demo: "https://phishing-app-demo.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: ["Real-time analytics", "Email templates", "Response tracking", "Admin dashboard"],
    stars: 42
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing my work with smooth animations and dark mode support, built with cutting-edge frontend technologies.",
    image: "/images/portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.vercel.app",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    features: ["Dark mode", "Responsive design", "Animations", "SEO optimized"],
    stars: 28
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online store with product management, user authentication, shopping cart, and secure payment processing.",
    image: "/images/ecommerce.png",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    tech: ["Next.js", "Stripe", "Redux", "Firebase", "Tailwind CSS"],
    features: ["Product catalog", "User reviews", "Checkout process", "Order history"],
    stars: 65
  },
  {
    title: "Certificate Validator",
    description:
      "Blockchain-based certificate verification system that prevents fraud by validating educational credentials through QR codes.",
    image: "/images/cert-validator.png",
    github: "https://github.com/yourusername/cert-validator",
    demo: "https://cert-validator-demo.vercel.app",
    tech: ["Node.js", "Ethereum", "React", "MySQL", "Web3.js"],
    features: ["QR scanning", "Blockchain storage", "Admin portal", "PDF generation"],
    stars: 37
  },
  {
    title: "Chat App",
    description:
      "Real-time messaging application with end-to-end encryption, group chats, and multimedia sharing capabilities.",
    image: "/images/chat-app.png",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.vercel.app",
    tech: ["Socket.IO", "React", "MongoDB", "JWT", "Tailwind CSS"],
    features: ["Online status", "Message history", "File sharing", "Typing indicators"],
    stars: 53
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather visualization tool that displays forecasts, historical data, and severe weather alerts with beautiful charts.",
    image: "/images/weather.png",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    tech: ["React", "Chart.js", "OpenWeather API", "Geolocation API"],
    features: ["5-day forecast", "Hourly data", "Weather maps", "Location search"],
    stars: 19
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            My <span className="text-purple-600 dark:text-purple-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was carefully crafted to solve real problems with modern technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-purple-600/80 text-white px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-yellow-500">
                    <FiStar className="mr-1" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <FiCode className="mr-1" /> Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-400/20"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FiGithub className="mr-2" /> View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;