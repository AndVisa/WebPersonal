import Lead from './contact.model.js';
import logger from '../../config/logger.js';

export const createLead = async (req, res, next) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;
    
    // Mongoose Model (que tiene las validaciones de defensa en profundidad) 
    // se encarga de guardar en DB.
    const newLead = await Lead.create({
      nombre,
      email,
      telefono,
      mensaje
    });

    logger.info(`Nuevo lead de contacto recibido: ${newLead._id}`);

    res.status(201).json({
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
      data: {
        id: newLead._id,
        nombre: newLead.nombre
      }
    });
  } catch (error) {
    // Si la DB falla o hay un error inesperado, se pasa al manejador global
    next(error); 
  }
};
