// components/FloatingContactForm.jsx
import { useState } from 'react';
import { HiX } from 'react-icons/hi';

const FloatingContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-200 hover:text-red-500 text-xl"
        >
          <HiX />
        </button>
        <h2 className="text-xl font-bold mb-4 text-purple-700">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded border" />
          <textarea placeholder="Message" rows="4" className="w-full p-2 rounded border" />
          <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default FloatingContactForm;
