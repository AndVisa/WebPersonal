import { z } from 'zod';

export const createContactSchema = z.object({
  body: z.object({
    nombre: z.string({ required_error: 'El nombre es requerido' })
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .max(100, 'El nombre no puede exceder 100 caracteres')
      .trim(),
    email: z.string({ required_error: 'El email es requerido' })
      .email('Email inválido')
      .max(150, 'Email muy largo')
      .trim()
      .toLowerCase(),
    telefono: z.string()
      .max(20, 'Teléfono muy largo')
      .trim()
      .optional()
      .or(z.literal('')), // Permite enviar string vacío
    mensaje: z.string({ required_error: 'El mensaje es requerido' })
      .min(10, 'El mensaje debe tener al menos 10 caracteres')
      .max(1000, 'El mensaje no puede exceder 1000 caracteres')
      .trim(),
  })
});
