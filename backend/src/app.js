import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import logger from './config/logger.js';

const app = express();

// 1. Cabeceras de Seguridad
app.use(helmet());

// 2. CORS Estricto (Solo front-end autorizado)
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? (process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [])
  : [process.env.FRONTEND_URL || 'http://localhost:5173'];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (ej. Postman) solo en desarrollo o si está en la whitelist
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true,
}));

// 3. Rate Limiting Global
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limitar a 100 peticiones por IP cada 15 min
  message: 'Demasiadas peticiones desde esta IP, intenta nuevamente más tarde.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

// 4. Límite de Payload (Body Parser) para prevenir DoS
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// 5. Prevención de Inyección NoSQL
app.use(mongoSanitize());

// 6. Prevención de Contaminación de Parámetros HTTP
app.use(hpp());

// Logger de requests básico
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Rutas de prueba
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// TODO: Aquí se montarán las rutas de los módulos (ej. app.use('/api/contact', contactRoutes))

// Manejo de Errores
app.use(notFound);
app.use(errorHandler);

export default app;
