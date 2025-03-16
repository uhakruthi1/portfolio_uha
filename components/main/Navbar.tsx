'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);  // Close the menu after clicking a link
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#ff9ba2]/25 bg-[#00021443] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo/Name */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-[2px] text-gray-300 text-l" style={{ fontFamily: 'Roboto Mono, monospace' }}>
            &lt;uha kruthi kommi/&gt;
          </span>
        </a>

        {/* Desktop Navigation (with icons) */}
        <div className="hidden md:flex items-center justify-between w-1/2 h-auto border border-[#f8a04e61] bg-[#0300145e] mr-60 px-[10px] py-[8px] rounded-full text-gray-200">
          <div className="group relative">
            <a href="#about-me" className="cursor-pointer">
              <img src="abouteme.png" alt="About me" className="w-8 h-8" />
              <span className="absolute left-0 top-10 w-full text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">About me</span>
            </a>
          </div>
          <div className="group relative">
            <a href="#experience" className="cursor-pointer">
              <img src="/experience.png" alt="Experience" className="w-8 h-8" />
              <span className="absolute left-0 top-10 w-full text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Experience</span>
            </a>
          </div>
          <div className="group relative">
            <a href="#projects" className="cursor-pointer">
              <img src="/projects.png" alt="Projects" className="w-8 h-8" />
              <span className="absolute left-0 top-10 w-full text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Projects</span>
            </a>
          </div>
          <div className="group relative">
            <a href="#skills" className="cursor-pointer">
              <img src="/skill.png" alt="Skills" className="w-8 h-8" />
              <span className="absolute left-0 top-10 w-full text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Skills</span>
            </a>
          </div>
          <div className="group relative">
            <a href="#contact" className="cursor-pointer">
              <img src="/contact.png" alt="Contact" className="w-8 h-8" />
              <span className="absolute left-0 top-10 w-full text-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Contact</span>
            </a>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={handleMenuToggle}>
          <span className="text-white text-3xl">☰</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0300145e] text-gray-200 p-4">
          <a href="#about-me" className="block text-sm py-2" onClick={handleLinkClick}>About Me</a>
          <a href="#experience" className="block text-sm py-2" onClick={handleLinkClick}>Experience</a>
          <a href="#projects" className="block text-sm py-2" onClick={handleLinkClick}>Projects</a>
          <a href="#skills" className="block text-sm py-2" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" className="block text-sm py-2" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
