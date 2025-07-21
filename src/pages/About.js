import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaArrowUp,
  FaDatabase,
  FaMobile,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';

import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
} from 'react-icons/fa';


import { FiDownload } from 'react-icons/fi';
import profilePic from '../img/computer.jpg';
import resumePDF from '../img/mypdf.pdf';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const featureRef = useRef(null);
  const heroRef = useRef(null);

  // Experience Data
  const experienceData = [
    {
      role: 'Full-Stack Developer',
      company: 'snzcyberintellects',
      period: 'June 2025 - Present',
      description: 'Full Stack Developer specializing in MERN Stack (MongoDB, Express, React, Node.js) with expertise in Vue.js, REST APIs, and database design. Skilled in building scalable web apps from frontend (HTML/CSS/JS) to backend (Express, API integration). Passionate about clean code, performance optimization, and DevOps (Docker, AWS). Portfolio.',
    },
  ];

  // Enhanced Education Data
  const educationData = [
    {
      level: 'Master of Computer Applications (MCA)',
      school: 'State University',
      year: 'july-2025 Present',
      stream: 'Advanced Computer Science',
    },

    {
      level: 'Bachelor of Computer Application',
      school: 'Ewing Christian College',
      year: '2022 - 2025',
      stream: 'Computer Science',
      score: '7.6 GPA',
      achievements: [
        'Specialization in Web Technologies',
      ]
    },
    {
      level: 'Higher Secondary Education',
      school: 'S.B.I College',
      year: '2019 - 2021',
      stream: 'Science',
      score: '66%'
    }
  ];

  // Enhanced Features Data
  const features = [
    {
      icon: <FaLaptopCode className="w-5 h-5" />,
      title: 'Frontend Development',
      desc: 'Building responsive, interactive UIs with modern frameworks.',
      color: 'from-blue-500 to-blue-600',
      items: [
        'React.js & Next.js',
        'Vue.js',
        'Tailwind CSS',
        'Framer Motion',
        'GSAP',
        'Redux State Management',
        'Responsive Design'
      ]
    },
    {
      icon: <FaServer className="w-5 h-5" />,
      title: 'Backend Development',
      desc: 'Robust server-side architecture and API development.',
      color: 'from-purple-500 to-purple-600',
      items: [
        'Node.js & Express',
        'Java $ Spring Boot',
        'RESTful APIs',
        'JWT Authentication',
        'Middleware Integration',
        'Docker',
        'WebSockets'
      ]
    },
    {
      icon: <FaDatabase className="w-5 h-5" />,
      title: 'Database Management',
      desc: 'Efficient data modeling and database solutions.',
      color: 'from-green-500 to-green-600',
      items: [
        'MySql',
        'Redis',
        'MongoDB',
        'PostgreSQL',
        'Data Modeling',
        'Query Optimization',
        'Database Security'
      ]
    },
    {
      icon: <FaMobile className="w-5 h-5" />,
      title: 'Mobile Responsive',
      desc: 'Fully responsive designs for all devices.',
      color: 'from-yellow-500 to-yellow-600',
      items: [
        'Mobile-First Approach',
        'Touch Optimization',
        'Performance Tuning',
        'PWA Support',
        'Cross-Browser Testing'
      ]
    },
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: 'Security',
      desc: 'Secure applications with best practices.',
      color: 'from-red-500 to-red-600',
      items: [
        'Authentication',
        'Data Encryption',
        'Input Validation',
        'CORS Policies',
        'Security Headers'
      ]
    },
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: 'DevOps & Deployment',
      desc: 'CI/CD pipelines and cloud solutions.',
      color: 'from-indigo-500 to-indigo-600',
      items: [
        'Docker Containers',
        'AWS/GCP',
        'CI/CD Pipelines',
        'Performance Monitoring',
        'Scalability'
      ]
    }
  ];

  useEffect(() => {
    // Floating particles animation
    const particles = [];
    for (let i = 0; i < 15; i++) {
      particles.push(
        gsap.to(`.particle-${i}`, {
          x: gsap.utils.random(-100, 100),
          y: gsap.utils.random(-100, 100),
          duration: gsap.utils.random(10, 20),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        })
      );
    }

    // Feature cards animation
    if (featureRef.current) {
      gsap.from(featureRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: featureRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Hero section floating effect
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    return () => {
      particles.forEach(animation => animation.kill());
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 pt-24 px-4 sm:px-6 overflow-hidden">
      {/* Floating particles background */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className={`particle-${i} absolute rounded-full bg-purple-200/30 dark:bg-purple-800/30`}
          style={{
            width: `${gsap.utils.random(5, 10)}px`,
            height: `${gsap.utils.random(5, 10)}px`,
            left: `${gsap.utils.random(10, 90)}%`,
            top: `${gsap.utils.random(10, 90)}%`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto space-y-20 pb-16 relative z-10">
    

{/* Hero Section */}
<motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-12"
  ref={heroRef}
  id="home"
>
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ 
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="relative"
  >
    <img
      src={profilePic}
      alt="Profile"
      className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover shadow-xl ring-4 ring-purple-500/20 dark:ring-purple-600/30 hover:ring-6 transition-all duration-300"
    />
    <motion.div 
      className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      <FaCode className="w-6 h-6" />
    </motion.div>
  </motion.div>
  
  <div className="flex-1 text-center md:text-left space-y-6">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      <h2 className="text-3xl sm:text-5xl font-bold">
        Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Kaif</span>
      </h2>
      
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
          Aspiring Full-Stack Developer
        </span>
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
          Tech Enthusiast
        </span>
        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
          Quick Learner
        </span>
      </div>
      
      <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
        Currently pursuing my degree with 6 months of internship experience in web development. Skilled in React, Node.js, MongoDB, Java, and MySQL, I build robust full-stack applications. Passionate about creating efficient solutions and eager to contribute to innovative projects.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center pt-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href={resumePDF}
            download="Kaif_Resume.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium"
          >
            <FiDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all font-medium"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
    
    {/* Social Links */}
    <motion.div
      className="flex gap-4 justify-center md:justify-start pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {[
        { icon: <FaGithub className="w-6 h-6" />, url: "https://github.com" },
        { icon: <FaLinkedin className="w-6 h-6" />, url: "https://linkedin.com" },
        { icon: <FaTwitter className="w-6 h-6" />, url: "https://twitter.com" },
      ].map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          aria-label={`Social link ${index}`}
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  </div>
</motion.div>

{/* What I Offer Section */}
<div className="space-y-12">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold text-center"
  >
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
      What I Offer
    </span>
  </motion.h3>
  
  <div 
    className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-0"
    ref={featureRef}
  >
    {features.map((item, i) => (
      <motion.div
        key={i}
        className="feature-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 h-full"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
      >
        <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white mb-4`}>
          {item.icon}
        </div>
        <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{item.desc}</p>
        
        <ul className="space-y-2">
          {item.items.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${item.color}`}></span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
</div>

        {/* Experience Section */}
        <ExperienceTimeline 
          title="Professional Experience" 
          data={experienceData} 
          icon={<FaBriefcase className="text-yellow-500" />} 
        />

        {/* Enhanced Education Section */}
        <ExperienceTimeline 
          title="Education" 
          data={educationData} 
          isEducation 
          icon={<FaGraduationCap className="text-blue-500" />} 
        />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Enhanced Timeline Component
const ExperienceTimeline = ({ title, data, isEducation = false, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-12"
  >
    <h3 className="text-3xl font-bold text-center">
      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {title}
      </span>
    </h3>
    
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/30 to-blue-500/30 dark:from-purple-600/30 dark:to-blue-600/30"></div>
      
      <div className="space-y-8">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start gap-4 sm:gap-8`}
          >
            {/* Timeline dot */}
            <div className="flex-shrink-0 relative mt-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white">
                {icon}
              </div>
            </div>
            
            {/* Content card */}
            <div className={`flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 ${
              idx % 2 === 0 ? 'sm:mr-auto sm:max-w-md' : 'sm:ml-auto sm:max-w-md'
            }`}>
              <div className="flex items-center gap-2 text-lg font-semibold mb-1">
                {isEducation ? item.level : item.role}
              </div>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                {isEducation ? item.school : item.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {isEducation ? item.year : item.period}
              </p>
              
              {isEducation ? (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Stream:</span> {item.stream}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Score:</span> {item.score}
                    </p>
                  </div>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">Achievements:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default About;