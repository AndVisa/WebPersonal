import React, { memo } from 'react';
import { motion } from 'framer-motion';
import SolucionCard from '../components/SolucionCard';
import { SOLUCIONES } from '../data/soluciones';

/**
 * Componente que renderiza una solución individual
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la solución
 * @param {string} props.description - Descripción de la solución
 * @param {string} props.icon - Icono de la solución
 */
const SolucionItem = memo(({ title, description, icon }) => (
  <SolucionCard
    title={title}
    description={description}
    icon={icon}
  />
));

SolucionItem.displayName = 'SolucionItem';

// Definir variantes de animación fuera del componente para evitar recreaciones
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

/**
 * Página de Soluciones que muestra los servicios y soluciones tecnológicas ofrecidas.
 * Mantiene la misma estructura y estilos que la página Nosotros.
 */
const Soluciones = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-auto flex flex-col items-center justify-center bg-slate-600">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center py-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Nuestras Soluciones
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto mb-16"
          >
            Transformamos tus desafíos en oportunidades digitales con soluciones
            tecnológicas innovadoras y personalizadas.
          </motion.p>

          {/* Grid de Soluciones */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SOLUCIONES.map((solucion, index) => (
              <motion.div
                key={solucion.title}
                variants={itemVariants}
                custom={index}
              >
                <SolucionItem {...solucion} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default memo(Soluciones); 