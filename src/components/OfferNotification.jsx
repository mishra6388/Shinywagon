"use client";
import React, { useState, useEffect } from "react";

const OfferNotification = () => {
  const [show, setShow] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const entryTimer = setTimeout(() => setShow(true), 1000); // show after 1 second
    return () => clearTimeout(entryTimer);
  }, []);

  useEffect(() => {
    if (show) {
      const autoCloseTimer = setTimeout(() => handleClose(), 10000); // auto-close after 10s
      return () => clearTimeout(autoCloseTimer);
    }
  }, [show]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => setShow(false), 500); // match fade-out duration
  };

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 flex items-start justify-center z-50 p-4 sm:p-6
        ${isExiting ? "animate-fade-out" : "animate-bounce-in"}
      `}
    >
      <div
        className="
          relative bg-gradient-to-r from-blue-600 to-blue-800 text-white
          rounded-xl shadow-xl w-full max-w-md px-4 py-4
          flex flex-col sm:flex-row items-center gap-4
        "
      >
        {/* Icon */}
        <div className="bg-blue-900 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
            <circle cx="6.5" cy="16.5" r="2.5" />
            <circle cx="16.5" cy="16.5" r="2.5" />
          </svg>
        </div>

        {/* Text */}
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-lg sm:text-xl font-semibold">
            Special Car Wash Offer!
          </h3>
          <p className="text-sm sm:text-base text-blue-100">
            Starting at ₹300 only
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-blue-200 hover:text-white"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-900 rounded-b-xl overflow-hidden">
          <div className="h-full bg-blue-300 animate-shrink-width" />
        </div>
      </div>
    </div>
  );
};

// CSS Animations
if (typeof window !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes bounceIn {
      0% { transform: translateY(-40px); opacity: 0; }
      60% { transform: translateY(10px); opacity: 1; }
      80% { transform: translateY(-5px); }
      100% { transform: translateY(0); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-20px); }
    }
    @keyframes shrinkWidth {
      from { width: 100%; }
      to { width: 0%; }
    }
    .animate-bounce-in {
      animation: bounceIn 0.6s ease-out forwards;
    }
    .animate-fade-out {
      animation: fadeOut 0.5s ease-in forwards;
    }
    .animate-shrink-width {
      animation: shrinkWidth 10s linear forwards;
    }
  `;
  document.head.appendChild(style);
}

export default OfferNotification;
