import pino from 'pino';

// Configuración de Pino logger para asegurar que no se fugue PII (Personally Identifiable Information)
const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  redact: {
    paths: ['email', 'password', 'token', 'telefono', 'nombre', 'mensaje'],
    censor: '[REDACTED]'
  },
  ...(process.env.NODE_ENV !== 'production' && {
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
      },
    },
  }),
});

export default logger;
