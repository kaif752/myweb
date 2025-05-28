import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineMenu,
  HiOutlineX,
  HiHome,
  HiUser,
  HiCode,
  HiCollection,
  HiMail,
  HiSun,
  HiMoon,
} from 'react-icons/hi';

import logo from '../img/dark.png';
import logoWhite from '../img/white.png'; // ✅ White version for dark mode

const navItems = [
  { name: 'Home', path: '/', icon: <HiHome /> },
  { name: 'About', path: '/about', icon: <HiUser /> },
  { name: 'Skills', path: '/skills', icon: <HiCode /> },
  { name: 'Projects', path: '/projects', icon: <HiCollection /> },
  { name: 'Contact', path: '/contact', icon: <HiMail /> },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
<nav className="fixed top-0 left-0 w-full z-50 h-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
  <div className="container mx-auto px-6 h-full flex items-center justify-between">
    {/* Logo */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <NavLink to="/" onClick={() => setMenuOpen(false)} className="block relative">
        {/* Light Mode Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-auto dark:hidden select-none -mt-4" // Enlarged logo with offset
        />
        {/* Dark Mode Logo */}
        <img
          src={logoWhite}
          alt="Logo Dark"
          className="h-24 w-auto hidden dark:block select-none -mt-4"
        />
      </NavLink>
    </motion.div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
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

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-inner hover:scale-105 transition-transform"
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
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-1 rounded-full"
          >
            {darkMode ? (
              <HiSun className="text-yellow-400 text-2xl" />
            ) : (
              <HiMoon className="text-gray-800 dark:text-gray-200 text-2xl" />
            )}
          </button>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-gray-800 dark:text-white text-2xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-40 p-6 shadow-xl flex flex-col"
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
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
