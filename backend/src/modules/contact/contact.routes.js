import express from 'express';
import rateLimit from 'express-rate-limit';
import { createLead } from './contact.controller.js';
import { createContactSchema } from './contact.schema.js';
import { validateRequest } from '../../middlewares/validateRequest.js';

const router = express.Router();

// Rate limiting granular: Máximo 3 peticiones por IP cada hora para evitar SPAM
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 3, 
  message: { message: 'Has enviado demasiados mensajes. Por favor intenta de nuevo en una hora.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Ruta: POST /api/contact
// Flujo: Limiter -> Zod Validation -> Controller -> DB
router.post('/', contactLimiter, validateRequest(createContactSchema), createLead);

export default router;
