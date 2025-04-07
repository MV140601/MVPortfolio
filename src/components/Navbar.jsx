import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`z-10 w-full fixed top-0 text-white px-4 py-4 bg-[#011525] transition-all duration-300 ${
        scrolled ? 'shadow-[#8c98a41a] shadow-xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-serif italic text-orange-700 cursor-pointer">
          Mayuresh V.
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {['About Me', 'Experience', 'Projects', 'Contact'].map((item, idx) => (
            <div
              key={idx}
              className="text-xl font-sans cursor-pointer hover:border-b-2 hover:text-orange-700 hover:font-semibold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden  flex flex-col text-center justify-evenly items-start px-4 h-screen">
          {['About Me', 'Experience', 'Projects', 'Contact'].map((item, idx) => (
            <div
              key={idx}
              className="text-lg font-sans cursor-pointer hover:border-b-2 hover:text-orange-700 hover:font-semibold w-full"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
