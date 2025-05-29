import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import com from '../img/computer.jpg';
import mypdf from '../img/mypdf.pdf';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FiDownload, FiBriefcase } from "react-icons/fi";
import {
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiDocker, SiAmazonwebservices, SiExpress,
  SiMysql, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiPhp,
  SiVuedotjs, SiAngular, SiJavascript, SiGithub, SiGit, SiPostman,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const HomePage = () => {
  const projects = [
  {
    title: 'E-Commerce Platform',
    tech: ['MERN Stack'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-username/ecommerce-platform',
  },
  {
    title: 'Social Media App',
    tech: ['React', 'Firebase'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-username/social-media-app',
  },
  {
    title: 'Task Management',
    tech: ['Next.js', 'TypeScript'],
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/your-username/task-management',
  },
];


  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-blue-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-700' },
    { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-500' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-600 dark:text-gray-300' },
    { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
    { name: 'CSS3', icon: SiCss3, color: 'text-blue-600' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
    { name: 'PHP', icon: SiPhp, color: 'text-indigo-600' },
    { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-500' },
    { name: 'Angular.js', icon: SiAngular, color: 'text-red-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Git', icon: SiGit, color: 'text-red-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-600' },
  ];

  const [text] = useTypewriter({
    words: ["Hi, I'm Kaif", "I'm a Full Stack Web Developer"],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1200,
  });

  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('tech-stack-section');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

    useEffect(() => {
  const handleScroll = () => setOffsetY(window.scrollY);
  window.addEventListener('scroll', handleScroll);

  // GSAP animations
  gsap.from('.tech-icon', {
    scrollTrigger: {
      trigger: '#tech-stack-section',
      start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out',
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-card',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    ease: 'power2.out',
  });

  return () => {
    window.removeEventListener('scroll', handleScroll);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);


useEffect(() => {
  gsap.to('.parallax-img', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.parallax-img',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}, []);

const MotionLink = motion(Link);


const [formData, setFormData] = useState({ name: '', email: '', message: '' });
const [status, setStatus] = useState('');

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/api/contact', formData);
    setStatus('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    setStatus('Failed to send message. Please try again later.');
  }
};


return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated Background */}
        <svg
          className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] -z-20"
          style={{ transform: `translateX(-50%) translateY(${offsetY * 0.3}px)` }}
          viewBox="0 0 600 600"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="300" fill="url(#grad1)" />
        </svg>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-purple-600 dark:text-purple-400">{text}</span>
              <Cursor cursorColor="#a855f7" />
            </h2>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              I specialize in crafting modern, scalable, and efficient web applications...
            </p>
            <p className="text-base mb-8 text-gray-600 dark:text-gray-400">
              My expertise includes React, Node.js, MongoDB, MySQL, Docker, and AWS...
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
  {/* View Resume Button */}
 <motion.div
  className="flex flex-wrap gap-4 mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* View Resume - Download PDF */}
  <motion.a
    href={mypdf} // Make sure resume is in public/assets
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md"
  >
    <FiDownload className="text-lg" />
    View Resume
  </motion.a>

  {/* Hire Me - Modal Button */}
  <MotionLink
  to="/contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-6 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-colors"
>
  <FiBriefcase className="text-lg" />
  Hire Me
</MotionLink>
</motion.div>
</div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
  initial={{ x: 50, opacity: 0, scale: 0.9 }}
  animate={{ x: 0, opacity: 1, scale: 1 }}
  style={{ transform: `translateY(${offsetY * 0.1}px)` }} // Parallax effect
  transition={{ duration: 0.8, delay: 0.3 }}
  className="md:w-1/2 flex justify-center"
>
  <motion.div
    className="relative rounded-xl overflow-hidden p-1 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
    whileHover={{ rotate: 360, scale: 1.05 }}
    whileTap={{ scale: 0.95, rotate: -10 }}
    transition={{ duration: 1 }}
  >
    <motion.img
      src={com}
      alt="Profile"
      className="w-[350px] h-[350px] object-cover rounded-xl"
    />
  </motion.div>
</motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-600 dark:text-purple-400 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack-section" className="py-20 bg-gray-100 dark:bg-gray-800">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Tech Stack
        </motion.h3>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-purple-400 dark:hover:shadow-purple-500 transition-all"
                >
                  <Icon className={`w-10 h-10 mx-auto ${tech.color}`} />
                  <span className="block mt-2 font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Recent Projects
        </motion.h3>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section
  id="contact"
  className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 py-20 px-4"
>
  <motion.form
    onSubmit={handleSubmit}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-lg"
  >
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
      Contact Me
    </h2>

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />

    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
    >
      Send Message
    </button>

    {status && (
      <p className="mt-4 text-center text-sm text-gray-700 dark:text-gray-300">
        {status}
      </p>
    )}
  </motion.form>
</section>

    </div>
  );
};

export default HomePage;
