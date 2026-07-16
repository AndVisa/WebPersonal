import logger from '../config/logger.js';

export const validateEnv = () => {
  const requiredEnvVars = [
    'MONGO_URI',
    'NODE_ENV',
    'FRONTEND_URL'
  ];

  if (process.env.NODE_ENV === 'production') {
    requiredEnvVars.push('RESEND_API_KEY', 'ALLOWED_ORIGINS');
  }

  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingVars.length > 0) {
    logger.error(`[Fail-Fast] Faltan variables de entorno críticas: ${missingVars.join(', ')}`);
    logger.error('El servidor se cerrará para prevenir estados inconsistentes.');
    process.exit(1);
  }
};
