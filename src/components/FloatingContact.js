import { useState } from 'react';
import ContactModal from './ContactModal';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-6 z-50 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
      >
        💬 Contact
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
