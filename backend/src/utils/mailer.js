import { Resend } from 'resend';
import logger from '../config/logger.js';

// Instanciar solo si existe la llave, útil para no romper dev si aún no la ponen
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export const sendNotificationEmail = async (leadData) => {
  if (!resend) {
    logger.warn('RESEND_API_KEY no configurada. El correo de notificación NO fue enviado.');
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Notificaciones InnovateWeb <notificaciones@innovatews.com.mx>', // Debes configurar esto en Resend
      to: ['contacto@innovatews.com.mx'],
      subject: `Nuevo mensaje de contacto: ${leadData.nombre}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1e293b; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">Nuevo Lead de Contacto</h2>
          </div>
          <div style="padding: 20px; background-color: #f8fafc; color: #334155;">
            <p><strong>Nombre:</strong> ${leadData.nombre}</p>
            <p><strong>Email:</strong> ${leadData.email}</p>
            <p><strong>Teléfono:</strong> ${leadData.telefono || 'No proporcionado'}</p>
            <p><strong>Mensaje:</strong></p>
            <blockquote style="border-left: 4px solid #3b82f6; padding-left: 15px; margin: 10px 0; font-style: italic; color: #475569; background-color: #e2e8f0; padding: 10px; border-radius: 4px;">
              ${leadData.mensaje}
            </blockquote>
          </div>
          <div style="background-color: #cbd5e1; padding: 10px; text-align: center; font-size: 12px; color: #64748b;">
            <p>Este correo fue generado automáticamente por el sistema del sitio web.</p>
          </div>
        </div>
      `
    });

    if (error) {
      // Lanzamos el error para que sea capturado en el try/catch aislado del controlador
      throw new Error(error.message);
    }

    logger.info(`Correo de notificación enviado exitosamente vía Resend. ID: ${data.id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
