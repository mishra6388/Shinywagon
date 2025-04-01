import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function ContactForm({ isOpen, setIsOpen }) {
  const form = useRef();

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          setIsOpen(false);
        },
        (error) => {
          alert("Failed to send message!");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-2xl w-96 border border-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Contact Us</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
            <input 
              type="text" name="user_name" required 
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Number <span className="text-red-500">*</span></label>
            <input 
              type="tel" name="user_phone" required 
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input 
              type="email" name="user_email" 
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Address</label>
            <input 
              type="text" name="user_address" 
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea 
              name="message" rows="3"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg w-full cursor-pointer hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        <button 
          onClick={() => setIsOpen(false)}
          className="mt-4 text-red-500 underline block text-center cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
