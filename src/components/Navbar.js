"use client";

import { useState, useEffect } from 'react';
import { FaUser, FaGraduationCap, FaTools, FaCertificate, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow and background to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'experience', label: 'Experience', icon: <FaGraduationCap /> },
    { id: 'skills', label: 'Skills', icon: <FaTools /> },
    { id: 'certifications', label: 'Certifications', icon: <FaCertificate /> },
    { id: 'goals', label: 'Goals & Hobbies', icon: <FaHeart /> },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${
      scrolled ? 'bg-card-bg/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary-dark group flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary-dark text-white flex items-center justify-center mr-2 group-hover:bg-primary transition-colors">
                {navItems[0].icon}
              </span>
              <span className="transition-all group-hover:text-primary">Gulvaiz's Dashboard</span>
            </h1>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  ${activeSection === item.id 
                    ? "nav-link-active flex items-center" 
                    : "nav-link flex items-center"}
                  transition-all duration-300 ease-in-out
                `}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-primary-dark hover:bg-primary-light/10' : 'text-primary-dark hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-2 space-y-1 bg-card-bg/95 backdrop-blur-sm shadow-lg rounded-b-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                ${activeSection === item.id 
                  ? "nav-link-active w-full flex items-center" 
                  : "nav-link w-full flex items-center"}
                transition-all duration-200 ease-in-out
              `}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;