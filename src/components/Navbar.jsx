import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Francesca Montini" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              >
                Portfolio
              </Link>
              <Link
                to="/certificates"
                className="text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              >
                Certificates
              </Link>
            </div>
          </div>

          {/* FM Text */}
          <div className="hidden md:flex items-center">
            <span className="text-2xl font-cormorant-sc text-pink-600">FM</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-pink-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              to="/certificates"
              className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-cormorant-unicase text-lg"
              onClick={toggleMenu}
            >
              Certificates
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 