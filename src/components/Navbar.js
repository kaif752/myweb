import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiUser,
  HiCode,
  HiCollection,
  HiSun,
  HiMoon,
  HiPaperAirplane,
  HiX,
} from 'react-icons/hi';

import logo from '../img/dark.png';
import logoWhite from '../img/white.png';

const navItems = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Skills', path: '/skills', icon: <HiCode /> },
  { name: 'Projects', path: '/projects', icon: <HiCollection /> },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  // Form state & submission state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  // Form input change handler
  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Simple form validation
  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields.');
      return false;
    }
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email.');
      return false;
    }
    return true;
  };

  // Submit form handler
  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting form with data:', formData);

  if (!validateForm()) {
    console.log('Validation failed');
    return;
  }

  setIsSubmitting(true);
  try {
    const response = await axios.post('http://localhost:5000/api/contact', formData);
    console.log('Response:', response.data);
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setFormOpen(false);
      setIsSubmitting(false);
    }, 1500);
  } catch (error) {
    console.error('Error sending message:', error);
    toast.error('Failed to send message. Try again later.');
    setIsSubmitting(false);
  }
};

const MotionLink = motion(Link);


  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <nav
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50 h-14
        bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border border-gray-300 dark:border-gray-700
        rounded-3xl transition-colors duration-300 flex items-center"
      >
        <div className="container mx-auto px-6 flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="block relative">
              <img src={logo} alt="Logo" className="h-20 w-auto dark:hidden select-none" />
              <img src={logoWhite} alt="Logo Dark" className="h-20 w-auto hidden dark:block select-none" />
            </NavLink>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm uppercase tracking-wide font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-purple-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                  }`
                }
              >
                <span className="text-lg">{icon}</span> {name}
              </NavLink>
            ))}

            {/* Get In Touch Button */}
            <MotionLink
  to="/contact" // <-- Set your route here
  title="Open Contact Form"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 px-6 py-2 rounded-full
    bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
    text-white font-semibold uppercase tracking-wide
    shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
    transition-transform duration-300 ease-in-out animate-pulse"
>
  <HiPaperAirplane className="text-xl rotate-45" />
  Get In Touch
</MotionLink>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark Mode"
              className="ml-2 p-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-inner hover:scale-105 transition-transform"
            >
              {darkMode ? (
                <HiSun className="text-yellow-400 text-xl" />
              ) : (
                <HiMoon className="text-gray-800 dark:text-gray-200 text-xl" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-1 rounded-full">
              {darkMode ? (
                <HiSun className="text-yellow-400 text-2xl" />
              ) : (
                <HiMoon className="text-gray-800 dark:text-gray-200 text-2xl" />
              )}
            </button>
            <button onClick={toggleMenu} className="text-gray-800 dark:text-white text-2xl">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 p-6 shadow-xl flex flex-col"
          >
            <ul className="flex flex-col space-y-6 mt-4">
              {navItems.map(({ name, path, icon }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 text-lg font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive
                        ? 'text-purple-500'
                        : 'text-gray-800 dark:text-gray-300 hover:text-purple-500'
                    }`
                  }
                >
                  <span className="text-2xl">{icon}</span> {name}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setMenuOpen(false);
                  setFormOpen(true);
                }}
                title="Open Contact Form"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full
                  bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
                  text-white font-semibold uppercase tracking-wide
                  shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                  transition-transform duration-300 ease-in-out animate-pulse"
              >
                <HiPaperAirplane className="text-xl rotate-45" />
                Get In Touch
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Form */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            key="contact-form"
            initial={{ opacity: 0, y: '-40%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-40%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-900 p-8 rounded-3xl
            shadow-2xl max-w-lg w-full z-50 border border-gray-300 dark:border-gray-700"
          >
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-2xl"
              aria-label="Close form"
            >
              <HiX />
            </button>
            <h3 className="text-2xl font-bold text-purple-600 mb-6 select-none">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-full font-semibold text-white transition-colors duration-300
                  ${
                    isSubmitting
                      ? 'bg-purple-400 cursor-not-allowed'
                      : 'bg-purple-700 hover:bg-purple-800'
                  } flex items-center justify-center gap-3`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <HiPaperAirplane className="rotate-45" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
