import React from 'react';
import { motion } from 'framer-motion';

const Historia = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={textVariants}
        >
          <motion.h1
            variants={paragraphVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-8 max-w-6xl mx-auto text-center pointer-events-auto"
          >
            InnovateWeb Solutions: Tu Socio Tecnológico para el Crecimiento y la Innovación
          </motion.h1>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              variants={textVariants}
              className="prose prose-lg prose-slate mx-auto pointer-events-auto"
            >
              <motion.p
                variants={paragraphVariants}
                className="text-slate-100 leading-relaxed"
              >
                En InnovateWeb Solutions, vemos la tecnología no solo como una herramienta para resolver problemas actuales, sino como el motor fundamental para el crecimiento y la innovación tecnológica del mañana. Fundada a principios de 2025 por dos hermanos apasionados por el poder transformador del desarrollo de software y la automatización inteligente, nacimos con una visión clara: ser el socio tecnológico que impulsa a las empresas hacia el futuro.
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                className="text-slate-100 leading-relaxed mt-6"
              >
                Nuestra historia comenzó con la aplicación práctica de conocimientos certificados por Oracle y otras instituciones para superar nuestros propios desafíos empresariales. Esta experiencia fundacional nos enseñó el valor de las soluciones personalizadas y nos impulsó a crear InnovateWeb Solutions, una compañía de desarrollo de software enfocada en llevar esa misma capacidad de resolución de problemas a nuestros clientes.
              </motion.p>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="bg-slate-600/80 backdrop-blur-md p-8 rounded-lg pointer-events-auto"
            >
              <motion.h2
                variants={paragraphVariants}
                className="text-3xl font-bold text-white mb-6 text-center"
              >
                Más Allá de las Soluciones: Construyendo el Futuro Contigo
              </motion.h2>

              <div className="prose prose-lg prose-slate mx-auto">
                <motion.p
                  variants={paragraphVariants}
                  className="text-slate-100 leading-relaxed"
                >
                  Nuestro objetivo trasciende la simple entrega de proyectos. Aspiramos a convertirnos en un referente tecnológico, y eso significa estar siempre a la vanguardia. Estamos comprometidos con el desarrollo web moderno, la creación de soluciones de software innovadoras y la implementación de automatización inteligente que no solo optimicen tus operaciones hoy, sino que te preparen para las oportunidades del futuro.
                </motion.p>

                <motion.p
                  variants={paragraphVariants}
                  className="text-slate-100 leading-relaxed mt-6"
                >
                  Creemos en el poder de la colaboración. Nos vemos como una extensión de tu equipo, un socio tecnológico estratégico invertido en tu éxito a largo plazo. Trabajamos contigo para entender tus metas y aplicar la tecnología de manera que genere un impacto duradero, impulsando la transformación digital y el crecimiento sostenible de tu negocio.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              variants={textVariants}
              className="text-center mt-12"
            >
              <motion.a
                variants={paragraphVariants}
                href="/contacto"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 text-lg font-semibold hover:scale-110 pointer-events-auto"
              >
                Solicita una Consulta Estratégica
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Historia; 