import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Constantes para valores reutilizables
const CARD_CONFIG = {
  maxWidth: '500px',
  inactiveHeight: '400px',
  animationDuration: 0.5,
  inactiveScale: 1.05,
  inactiveX: -100,
  inactiveY: 30,
  inactiveRotateY: 15,
  inactiveOpacity: 0.7
};

const Fundadores = () => {
  const [active, setActive] = useState(0);

  const fundadores = [
    {
      nombre: "André Villanueva Sánchez",
      cargo: "Co-Fundador & CEO",
      descripcion: "Con 3 años de experiencia en programación, André es nuestro especialista en crear interfaces de usuario intuitivas y atractivas. Su viaje en el desarrollo comenzó con el programa Oracle ONE y se fortalece día a día con Alura. Actualmente, expande sus horizontes con el CS50 de Harvard y un bootcamp de GitHub certificado por Microsoft, demostrando un compromiso constante con la innovación y las tecnologías de vanguardia en el front-end.",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      nombre: "Alan Villanueva Sánchez",
      cargo: "Co-Fundador & CTO",
      descripcion: "Con 3 años de experiencia en programación, Alan es el motor detrás de la funcionalidad y robustez de nuestras aplicaciones. Formado inicialmente en Oracle ONE y en continua capacitación con Alura, Alan asegura que la lógica de negocio y las bases de datos operen con máxima eficiencia. Su dedicación se refleja en su actual participación en el CS50 de Harvard y el bootcamp de GitHub con certificación Microsoft, buscando siempre la excelencia técnica en el back-end.",
      imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  // Memoización de las funciones de navegación
  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % fundadores.length);
  }, [fundadores.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + fundadores.length) % fundadores.length);
  }, [fundadores.length]);

  // Variantes de animación para reutilización
  const cardVariants = {
    initial: (index) => ({
      opacity: 0,
      x: index === 0 ? -100 : 100,
      scale: 0.9,
      rotateY: index === active ? 0 : CARD_CONFIG.inactiveRotateY,
      y: index === active ? 0 : CARD_CONFIG.inactiveY
    }),
    animate: (index) => ({
      opacity: index === active ? 1 : CARD_CONFIG.inactiveOpacity,
      x: index === active ? 0 : CARD_CONFIG.inactiveX,
      scale: index === active ? 1 : CARD_CONFIG.inactiveScale,
      rotateY: index === active ? 0 : CARD_CONFIG.inactiveRotateY,
      y: index === active ? 0 : CARD_CONFIG.inactiveY,
      zIndex: index === active ? 1 : 0
    }),
    exit: {
      opacity: 0,
      x: 100,
      scale: 0.9,
      rotateY: CARD_CONFIG.inactiveRotateY,
      y: CARD_CONFIG.inactiveY
    }
  };

  return (
    <section className="py-16 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 pointer-events-auto"
        >
          Nuestros Fundadores
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex justify-center items-center min-h-[500px] relative">
            <AnimatePresence mode="wait">
              {fundadores.map((fundador, index) => (
                <motion.div
                  key={fundador.nombre}
                  custom={index}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: CARD_CONFIG.animationDuration }}
                  className={`bg-slate-600/80 backdrop-blur-md p-8 rounded-lg shadow-lg pointer-events-auto ${index === active ? 'relative z-10' : 'absolute'
                    }`}
                  style={{
                    width: '100%',
                    maxWidth: CARD_CONFIG.maxWidth,
                    transformOrigin: 'center',
                    height: index === active ? 'auto' : CARD_CONFIG.inactiveHeight,
                    overflow: 'hidden'
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-6">
                      <motion.img
                        src={fundador.imagen}
                        alt={fundador.nombre}
                        className="w-full h-full rounded-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{fundador.nombre}</h3>
                    <p className="text-blue-300 mb-4">{fundador.cargo}</p>
                    <p className="text-slate-200 leading-relaxed">{fundador.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-16">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-500 hover:bg-slate-400 transition-colors shadow-lg pointer-events-auto"
              aria-label="Anterior fundador"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-500 hover:bg-slate-400 transition-colors shadow-lg pointer-events-auto"
              aria-label="Siguiente fundador"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fundadores; 