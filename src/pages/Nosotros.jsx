import React, { memo } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Historia from '../components/Historia';
import Fundadores from '../components/Fundadores';

// Memoizar componentes estáticos
const MemoizedHero = memo(Hero);
const MemoizedHistoria = memo(Historia);
const MemoizedFundadores = memo(Fundadores);

// Definir variantes de animación fuera del componente para evitar recreaciones
const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

const Nosotros = () => {
  return (
    <div>
      {/* Hero Section con Misión y Visión */}
      <section className="relative h-auto flex flex-col items-center justify-center bg-slate-600">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center py-16">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={descriptionVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto mb-16"
          >
            Conoce más sobre nuestra historia, misión y el equipo que hace posible
            transformar tus ideas en realidad digital.
          </motion.p>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Misión */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-700 p-8 rounded-lg shadow-lg relative z-10 hover:z-20"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-300 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white text-center mb-6">Misión</h2>
              <p className="text-slate-100 leading-relaxed text-justify">
                Impulsar el éxito de nuestros clientes mediante el desarrollo de soluciones web y de software innovadoras y de alta calidad. Guiados por nuestros valores de disciplina, ética y responsabilidad, aplicamos nuestra experiencia para resolver desde desafíos tecnológicos básicos hasta automatizar procesos complejos, convirtiéndonos en un aliado clave para la eficiencia y transformación de cada negocio que servimos.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-slate-700 p-8 rounded-lg shadow-lg relative z-10 hover:z-20"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-blue-300 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white text-center mb-6">Visión</h2>
              <p className="text-slate-100 leading-relaxed text-justify">
                Convertirnos en el socio tecnológico innovador preferido por empresas que buscan la excelencia, impulsando su éxito digital a través de soluciones de software y web a medida de calidad excepcional. Aspiramos a resolver desde los problemas más específicos hasta catalizar transformaciones profundas, con la visión de crear tecnología que redefina el mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <MemoizedHistoria />
      <MemoizedFundadores />

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Aquí irá el contenido detallado de la página */}
        </div>
      </section>
    </div>
  );
};

export default memo(Nosotros); 