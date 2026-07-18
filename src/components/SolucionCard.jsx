import React from 'react';
import { motion } from 'framer-motion';
import './SolucionCard.css';

/**
 * Componente que muestra una tarjeta individual de solución
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la solución
 * @param {string} props.description - Descripción de la solución
 * @param {string} props.icon - Icono de la solución (emoji)
 */
const SolucionCard = ({ title, description, icon }) => {
  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en ${title}. ¿Podrían proporcionarme más información?`;
    const whatsappUrl = `https://wa.me/525571307725?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group hover-flip perspective-1000 w-full max-w-sm mx-auto"
    >
      <div className="relative preserve-3d transition-all duration-500 flip-wrapper h-80 mobile-card-height">
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full bg-slate-700/80 backdrop-blur-md rounded-lg shadow-lg p-8 flex flex-col front-face">
          <div className="flex items-center justify-center mb-8 text-4xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-6 text-center">{title}</h3>
          <p className="text-slate-100 leading-relaxed flex-grow text-justify">{description}</p>
          
          {/* CTA Solo Móvil */}
          <div className="mobile-cta mt-6 flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full"
            >
              Contáctanos
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute backface-hidden w-full h-full bg-slate-700/80 backdrop-blur-md rounded-lg shadow-lg p-8 flex flex-col items-center justify-center rotate-y-180 back-face">
          <h3 className="text-xl font-bold text-white mb-8 text-center">¿Listo para comenzar?</h3>
          <button
            onClick={handleWhatsAppClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SolucionCard; 