import { motion} from 'framer-motion';
import { FiDownload, FiBriefcase, FiCode } from "react-icons/fi";
import project1 from '../img/project1.jpg';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiDocker,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiJest,
  SiGit,
  SiPostman,
  SiHtml5, 
    SiCss3, 
    SiJavascript, 
    SiBootstrap, 
    SiVuedotjs, 
    SiGithub,
} from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Full Stack Developer Content
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with React, Next.js, and modern CSS frameworks",
      icon: <FiCode className="text-3xl text-purple-600" />
    },
    {
      title: "Backend Development",
      description: "Creating Robust APIs and server-side logic with Java, Node.js, Express, and databases.",
      icon: <FiCode className="text-3xl text-blue-600" />
    },
    {
      title: "Database Design",
      description: "Structuring efficient data models with both SQL and NoSQL databases",
      icon: <FiCode className="text-3xl text-green-600" />
    }
  ];

  const projects = [
    {
      title: 'Phishing Simulation',
      tech: ['HTML', 'CSS', 'MySQL', 'Docker', 'JavaScript', 'GoLang'],
      demo: 'https://ecommerce-demo.com',
      description: 'Full-featured Phishing simulation platform that trains employees to detect, report, and prevent email-based cyber attacks through realistic threat scenarios.',
      image: project1
},
    {
      title: 'Snz Cyberintellects',
      tech: ['Node.js', 'JavaScript', 'React.js', 'Express.js', 'MySql', 'Tailwind'],
      demo: 'https://snzcyberintellects.com',
      description: 'Dynamic website offering cybersecurity training and services with interactive courses, threat simulations, and expert-led certifications for professionals.',
      image: project2
    },
    {
      title: 'Safe Click',
      tech: ['React', 'php', 'javaScript', 'Tailwind', 'MySql', 'Framer Motion', 'GSAP'],
      demo: 'https://creative-gelato-1489e7.netlify.app/',
      description: 'SafeClick provides realistic phishing tests and security awareness training to reduce human risk in your organization.',
      image: project3
    }
  ];

  const techStack = [
    { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'Jest', icon: SiJest, color: 'text-red-600' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' }
];
  const MotionLink = motion(Link);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full filter blur-3xl"></div>
          
          {/* Floating Tech Icons */}
          {[1, 2, 3, 4, 5, 6].map((i) => {
            const Icon = techStack[i % techStack.length].icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  y: [100, -100],
                  x: Math.random() * 200 - 100
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute text-purple-400/20 dark:text-purple-600/20"
                style={{
                  fontSize: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              >
                <Icon />
              </motion.div>
            );
          })}
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-20 lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Kaif</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I architect high-performance full-stack web applications with scalable backends and intuitive interfaces. Combining modern technologies with optimized architecture, I build solutions that excel in speed, reliability and user experience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.a>
              
              <MotionLink
                to="/contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
              >
                <FiBriefcase className="text-lg" />
                Hire Me
              </MotionLink>
            </motion.div>
            
            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                What I Offer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="mb-3">
                      {service.icon}
                    </div>
                    <h4 className="font-bold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative px-20 hidden lg:block"
          >
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="grid grid-cols-3 gap-4 w-full h-full">
                  {[0, 1, 2, 6, 7, 15].map((item) => {
                    const TechIcon = techStack[item % techStack.length]?.icon;
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * item }}
                        className="bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-md p-4 flex flex-col items-center justify-center"
                      >
                        <div className={`text-2xl ${techStack[item % techStack.length]?.color} mb-2`}>
                          {TechIcon && <TechIcon />}
                        </div>
                        <span className="text-xs font-medium text-center">
                          {techStack[item % techStack.length]?.name || 'Tech'}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">Explore More</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                My Tech Stack
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies I've mastered to build modern, scalable web applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className={`${tech.color} mb-3 flex justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="block text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;