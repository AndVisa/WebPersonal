import Lead from './contact.model.js';
import { sendNotificationEmail } from '../../utils/mailer.js';
import logger from '../../config/logger.js';

export const createLead = async (req, res, next) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;
    
    // 1. Persistencia de Datos (Crítico)
    // Mongoose Model (que tiene las validaciones de defensa en profundidad) 
    // se encarga de guardar en DB de forma segura.
    const newLead = await Lead.create({
      nombre,
      email,
      telefono,
      mensaje
    });

    logger.info(`Nuevo lead de contacto recibido y guardado en BD: ${newLead._id}`);

    // 2. Notificación por correo (Secundario / Aislado)
    // REGLA DE NEGOCIO: Envolvemos Resend en un try/catch independiente.
    // Si falla, el error se loguea, pero el cliente sigue recibiendo su respuesta de éxito (201).
    try {
      await sendNotificationEmail({ nombre, email, telefono, mensaje });
    } catch (emailError) {
      logger.error(`[ALERTA] Falló el envío de correo por Resend. El Lead (${newLead._id}) SÍ se guardó en BD. Detalle del error: ${emailError.message}`);
    }

    // 3. Respuesta al cliente
    res.status(201).json({
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
      data: {
        id: newLead._id,
        nombre: newLead.nombre
      }
    });
  } catch (error) {
    // Si la BD falla o hay un error inesperado, se pasa al manejador global
    next(error); 
  }
};
