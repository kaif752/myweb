import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg p-6 max-w-md w-full relative shadow-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
            <h3 className="text-xl font-bold mb-4">Let’s Connect</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" />
              <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800" />
              <textarea placeholder="Message" className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Send</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
