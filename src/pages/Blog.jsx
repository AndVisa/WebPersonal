import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] pointer-events-none flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10 text-center pointer-events-none">
          {/* Contenido del blog se agregará posteriormente */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 pointer-events-auto"
          >
            Nuestro Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mx-auto pointer-events-auto"
          >
            Próximamente compartiremos artículos y novedades.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

Blog.propTypes = {};

export default memo(Blog); 