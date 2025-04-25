import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const OfferNotification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000); // show after 3s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed top-8 left-1/2 transform -translate-x-1/2 
        bg-gray-200 text-[#031831] 
        px-8 py-6 rounded-2xl shadow-xl 
        flex items-center justify-between gap-4 
        w-[90%] max-w-lg z-50 
        animate-slideDown
      "
    >
      <span className="font-bold text-2xl md:text-3xl">
        🚗 Wash your car only in ₹300!
      </span>
      <button
        onClick={() => setShow(false)}
        className="text-[#031831] hover:text-red-500 transition"
      >
        <FaTimes size={24} />
      </button>
    </div>
  );
};

export default OfferNotification;
