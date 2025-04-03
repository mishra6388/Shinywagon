import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="flex flex-col space-y-10 justify-center h-100 bg-[#031831] w-full p-6">
      {/* Navigation Links */}
      <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
        <Link className="hover:text-gray-400" to="/" onClick={scrollToTop}>Home</Link>
        <Link className="hover:text-gray-400" to="/about" onClick={scrollToTop}>About</Link>
        <Link className="hover:text-gray-400" to="/services" onClick={scrollToTop}>Services</Link>
        <Link className="hover:text-gray-400" to="/terms" onClick={scrollToTop}>Terms and Conditions</Link>
        <Link className="hover:text-gray-400" to="/gallery" onClick={scrollToTop}>Gallery</Link>
        <Link className="hover:text-gray-400" to="/contact" onClick={scrollToTop}>Contact</Link>
      </nav>

  <div className="flex flex-col space-y-2 text-lg text-center">
  <p className="text-[#fbd112]">
    📞 <span className="font-semibold">Phone: </span> 
    <a href="tel:+916388922616" className="text-white hover:underline hover:text-blue-500">
      +91 98765 43210
    </a>
  </p>
  <p className="text-[#fbd112]">
    ✉️ <span className="font-semibold">Email: </span> 
    <a href="mailto:prashant@gmail.com" className="text-white hover:underline hover:text-blue-500">
      info@shinywagon.in
    </a>
  </p>
</div>


      {/* Social Media Links */}
      <div className="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/ffffff/facebook-new.png" alt="Facebook" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/ffffff/linkedin-2.png" alt="LinkedIn" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/ffffff/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/ffffff/twitter.png" alt="Twitter" />
        </a>
        {/* WhatsApp Link */}
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/30/ffffff/whatsapp.png" alt="WhatsApp" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-white font-medium">
        &copy; {new Date().getFullYear()} ShinyWagon Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
