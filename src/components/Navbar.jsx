import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Soluciones', path: '/soluciones' },
    { name: 'Blog', path: '/Blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="md:ml-8">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative"
              >
                {/* Capas de fondo para efecto 3D */}
                <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-6 blur-sm opacity-20" />
                <div className="absolute inset-0 bg-blue-500 rounded-lg transform -rotate-6 blur-sm opacity-20" />
                <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3 blur-sm opacity-20" />
                <div className="absolute inset-0 bg-blue-700 rounded-lg transform -rotate-3 blur-sm opacity-20" />
                
                {/* Sombra principal */}
                <div className="absolute inset-0 bg-black rounded-lg transform translate-y-1 blur-sm opacity-10" />
                
                {/* Contenedor del logo con efecto de elevación */}
                <div className="relative z-10 transform transition-all duration-300 hover:translate-y-[-2px]">
                  <img 
                    src="/Logo/LogoIWS.png" 
                    alt="InnovateWeb Solutions Logo" 
                    className="h-12 w-auto rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative z-10"
                  />
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-95 py-4"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white text-lg hover:text-blue-400 transition-colors w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 