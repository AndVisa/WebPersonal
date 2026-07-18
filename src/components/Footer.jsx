import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-40 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="md:justify-self-center text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a href="https://wa.me/525571307725" target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer hover:scale-105 transition-transform">
                <FaWhatsapp className="mr-3 text-green-400" />
                <span>+525571307725</span>
              </a>
              <a href="mailto:contacto@innovatews.com.mx" className="flex items-center cursor-pointer hover:scale-105 transition-transform">
                <FaEnvelope className="mr-3 text-blue-400" />
                <span>contacto@innovatews.com.mx</span>
              </a>
              <div className="flex items-center cursor-pointer hover:scale-105 transition-transform">
                <FaMapMarkerAlt className="mr-3 text-red-400" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="md:justify-self-center">
            <h3 className="text-xl font-bold mb-4 text-center">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-center">
              <li><a href="/" className="hover:text-blue-400 transition-colors cursor-pointer hover:scale-105 inline-block">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-blue-400 transition-colors cursor-pointer hover:scale-105 inline-block">Nosotros</a></li>
              <li><a href="/soluciones" className="hover:text-blue-400 transition-colors cursor-pointer hover:scale-105 inline-block">Soluciones</a></li>
              <li><a href="/Blog" className="hover:text-blue-400 transition-colors cursor-pointer hover:scale-105 inline-block">Blog</a></li>
              <li><a href="/contacto" className="hover:text-blue-400 transition-colors cursor-pointer hover:scale-105 inline-block">Contacto</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="md:justify-self-center">
            <h3 className="text-xl font-bold mb-4 text-center">Síguenos</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61570047867084" className="text-2xl hover:text-blue-400 transition-colors cursor-pointer hover:scale-110">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/innovateweb_solutions/" className="text-2xl hover:text-pink-400 transition-colors cursor-pointer hover:scale-110">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-blue-500 transition-colors cursor-pointer hover:scale-110">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} InnovateWeb Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 