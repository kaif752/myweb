// components/GradientButton.jsx
import { motion } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';

const GradientButton = ({ text = 'Get In Touch', onClick, tooltip }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    title={tooltip || text}
    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full
      bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800
      text-white font-semibold uppercase tracking-wide
      shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
      transition-transform duration-300 ease-in-out animate-pulse"
  >
    <HiPaperAirplane className="text-xl rotate-45" />
    {text}
  </motion.button>
);

export default GradientButton;
