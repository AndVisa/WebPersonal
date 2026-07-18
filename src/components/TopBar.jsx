import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TopBar = ({ className = '' }) => {
  return (
    <div className={`py-2 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Información de contacto */}
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/525571307725" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-blue-400 transition-colors">
              <FaWhatsapp className="text-lg" />
              <span className="hidden sm:inline-block ml-2 text-sm">+52 55 7130 7725</span>
            </a>
            <a href="mailto:contacto@innovatews.com.mx" className="flex items-center text-white hover:text-blue-400 transition-colors">
              <FaEnvelope className="text-lg" />
              <span className="hidden sm:inline-block ml-2 text-sm">contacto@innovatews.com.mx</span>
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61570047867084" className="text-white hover:text-blue-400 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/innovateweb_solutions/" className="text-white hover:text-pink-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 