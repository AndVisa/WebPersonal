import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Transformamos Ideas en
          <span className="text-blue-500"> Realidad Digital</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Desarrollo web y software personalizado para impulsar tu negocio hacia el futuro
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link 
            to="/soluciones" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer hover:scale-105"
          >
            Conoce Nuestros Servicios
          </Link>
          <Link 
            to="/contacto" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer hover:scale-105"
          >
            Contáctanos
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent; 