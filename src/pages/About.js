import React, { useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaArrowUp,
} from 'react-icons/fa';
import profilePic from '../img/computer.jpg';
import resumePDF from '../img/mypdf.pdf';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: 'Full Stack Intern',
    company: 'Tech Solutions Inc.',
    period: 'Jan 2024 - Present',
    description: 'Hands-on MERN development. Built real-world apps with JWT authentication & secure deployment.',
  },
];

const educationData = [
  {
    level: 'College - BSc IT',
    school: 'XYZ College, Mumbai University',
    year: '2022',
    stream: 'Information Technology',
    score: 'Pursuing',
  },
  {
    level: '12th Grade - CBSE',
    school: 'Sunrise Senior Secondary School',
    year: '2019',
    stream: 'Science (PCM)',
    score: '88%',
  },
  {
    level: '10th Grade - CBSE',
    school: 'Sunrise High School',
    year: '2017',
    stream: 'General',
    score: '90%',
  },
];

const features = [
  {
    icon: <FaCode className="text-blue-600 w-8 h-8" />,
    title: 'Real-World Projects',
    desc: 'Built & deployed MERN apps with JWT auth, GitHub version control, and clean codebase.',
  },
  {
    icon: <FaLaptopCode className="text-green-600 w-8 h-8" />,
    title: 'Responsive UI',
    desc: 'Modern UIs with React.js, Tailwind CSS & Framer Motion animations for smooth UX.',
  },
  {
    icon: <FaServer className="text-purple-600 w-8 h-8" />,
    title: 'API Development',
    desc: 'REST APIs using Express.js, MongoDB, and Node.js with secure architecture.',
  },
];

const About = () => {
  const featureRef = useRef(null);

  useEffect(() => {
    gsap.from(featureRef.current.children, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: featureRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 pt-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hi, I’m Kaif</h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Full-Stack MERN Developer focused on building fast, secure & responsive web apps using modern tools like React, Node, MongoDB, Tailwind, and GSAP.
            </p>
            <a
              href={resumePDF}
              download="Kaif_Resume.pdf"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow transition"
            >
              📄 Download Resume
            </a>
          </div>
        </motion.div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow space-y-8" ref={featureRef}>
          <h3 className="text-xl sm:text-2xl font-bold text-center text-purple-700 dark:text-purple-400">
            🚀 What I Offer
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow hover:shadow-lg transition space-y-2"
              >
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <ExperienceTimeline title="🧑‍💻 Experience" data={experienceData} icon={<FaBriefcase />} />

        {/* Education */}
        <ExperienceTimeline title="🎓 Education" data={educationData} isEducation icon={<FaGraduationCap />} />

        {/* Scroll to Top */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-md"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline = memo(({ title, data, isEducation = false, icon }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow max-w-5xl mx-auto"
  >
    <h3 className="text-xl sm:text-3xl font-extrabold mb-8 text-center text-purple-700 dark:text-purple-400">
      {title}
    </h3>
    <div className="space-y-8">
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-purple-50 dark:bg-purple-900 text-gray-900 dark:text-gray-100 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02]"
        >
          <p className="flex items-center gap-2 font-semibold text-lg sm:text-xl text-purple-800 dark:text-purple-300">
            {icon} {isEducation ? item.level : item.role}
          </p>
          <p className="text-purple-700 dark:text-purple-400 font-semibold mt-1">
            {isEducation ? item.school : item.company}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-1">
            {isEducation ? item.year : item.period}
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {isEducation ? (
              <>
                <strong>Stream:</strong> {item.stream}<br />
                <strong>Score:</strong> {item.score}
              </>
            ) : item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
));

export default memo(About);
