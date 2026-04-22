"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Mission & Vision", href: "#mission-vision" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container-custom flex flex-wrap justify-between items-center py-4">
        <a href="/" className="flex items-center">
  <Image
    src="/naprint-01-01-01.png"          // adjust filename & extension
    alt="Naprint Logo"
    width={170}              // adjust to your logo's natural width
    height={120}              // adjust to your logo's natural height
    className="h-13 w-auto"   // optional: control displayed size
    priority                 // loads faster for LCP
  />
</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-white text-md font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-secondary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden w-full mt-4 bg-primary/95 rounded-lg p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-secondary transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;