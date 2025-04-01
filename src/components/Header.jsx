import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ Import image

function Header() {
  const location = useLocation(); // ✅ Get the current route
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path ? "font-bold text-[#031831]" : "text-[#031831]";

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-xl">
          <Link to="/" className={`${isActive("/")}`}>Home</Link>
          <Link to="/about" className={`${isActive("/about")}`}>About Us</Link>
          <Link to="/contact" className={`${isActive("/contact")}`}>Contact Us</Link>
          <Link to="/services" className={`${isActive("/services")}`}>Our Services</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu} // ✅ Toggle the menu on click
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu (Visible when isMobileMenuOpen is true) */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-md`}>
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link to="/" className={`${isActive("/")}`}>Home</Link>
          <Link to="/about" className={`${isActive("/about")} text-xl`}>About Us</Link>
          <Link to="/contact" className={`${isActive("/contact")} text-xl`}>Contact Us</Link>
          <Link to="/services" className={`${isActive("/services")} text-xl`}>Our Services</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
