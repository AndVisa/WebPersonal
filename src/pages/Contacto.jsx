import React, { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Componentes reutilizables
const FormInput = memo(({ label, type, name, value, onChange, required, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-white mb-2">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows="4"
        className="w-full px-4 py-2 rounded-md bg-slate-600 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 rounded-md bg-slate-600 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    )}
  </div>
));

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
};

const ContactInfoItem = memo(({ icon, text }) => (
  <div className="flex items-center space-x-4">
    {icon}
    <p className="text-white">{text}</p>
  </div>
));

ContactInfoItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

// Constantes
const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Colonia Nápoles, Benito Juárez, CDMX."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    text: "+123 456 7890"
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    text: "contacto@innovatews.com.mx"
  }
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Aquí se implementará la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
  }, [formData]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pointer-events-none">
        <div className="container mx-auto px-4 relative z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pointer-events-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-slate-300">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg pointer-events-auto"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormInput
                  label="Nombre Completo"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
                <FormInput
                  label="Correo Electrónico"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
                <FormInput
                  label="Teléfono"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Tu teléfono"
                />
                <FormInput
                  label="Mensaje"
                  type="textarea"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Tu mensaje"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

            {/* Información de Contacto y Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 pointer-events-auto"
            >
              {/* Información de Contacto */}
              <div className="bg-slate-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  {CONTACT_INFO.map((item, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start">
                      {item.icon}
                      <p className="text-white ml-4">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa de Google */}
              <div className="bg-slate-700/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                  Ubicación
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7526.86881801901!2d-99.18113175544717!3d19.39362774761508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff70fdea5055%3A0xf47485a18fe215a8!2sN%C3%A1poles%2C%2003810%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1783491253072!5m2!1ses!2smx"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                    title="Ubicación de la empresa"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Contacto); 