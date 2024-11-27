import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({
  isDarkMode,
  setIsDarkMode,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 ${
        isDarkMode ? "bg-[#1a0000] text-white" : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">RedTilt</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 ml-auto">
        <Link to="/" className="hover:text-gray-400 transition-colors">
          Home
        </Link>
        <Link to="/blog" className="hover:text-gray-400 transition-colors">
          Blog
        </Link>
      </nav>

      {/* "Start a Project" Button for Large Screens */}
      <div className="hidden lg:flex items-center ml-auto">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 mr-4 rounded-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <i className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"}`}></i>
        </button>
        <Link
          to="/"
          className="bg-[#750909] text-white py-2 px-6 rounded-md border border-transparent hover:bg-[#ce1b1b] transition-all"
        >
          Start a Project
        </Link>
      </div>

      {/* Mobile Navigation and Dark Mode Button - Positioned in Top Right Corner */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 mr-4 rounded-md ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <i className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"}`}></i>
        </button>
        {/* Mobile Menu Icon (Hamburger) */}
        <button
          onClick={toggleMobileMenu}
          className={`text-black p-2 rounded-md ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu (Fullscreen) */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 ${
          isMobileMenuOpen ? "block" : "hidden"
        } z-50 transition-all`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            <i className="fas fa-times"></i> {/* Close Icon */}
          </button>
        </div>
        <nav className="flex flex-col items-center justify-start h-full space-y-6 text-white pt-12">
          <Link
            to="/"
            className="text-2xl hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-2xl hover:text-gray-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/start-project"
            className="bg-[#750909] text-white py-2 px-6 rounded-md border border-transparent hover:bg-[#ce1b1b] transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
