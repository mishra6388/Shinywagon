import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 flex flex-col items-center gap-4 z-50">
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91987651437"  // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919355575876"  // replace with your number
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaPhoneAlt size={20} />
      </a>
      
    </div>
  );
};

export default FloatingButtons;
