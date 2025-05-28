import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import logodark from '../img/dark.png';
import logowhite from '../img/white.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

          {/* Logo & Title in One Line */}
          <div className="flex items-center gap-3">
            <NavLink to="/" className="inline-block">
              <img
                src={logodark}
                alt="KaifS Logo"
                className="h-16 block dark:hidden"
              />
              <img
                src={logowhite}
                alt="KaifS Logo Dark"
                className="h-12 hidden dark:block"
              />
            </NavLink>
            <p className="text-sm font-medium whitespace-nowrap">Full-Stack Developer & Web Enthusiast</p>
          </div>

          {/* Navigation & Social Links Combined */}
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6 text-sm font-medium">
            <ul className="flex gap-4 md:gap-5">
              <li>
                <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>

            <div className="flex gap-3 text-lg">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-700  mt-3 pt-2 text-center text-sm text-gray-800 dark:text-gray-300">
          © {new Date().getFullYear()} KaifS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
