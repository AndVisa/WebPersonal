import logger from '../config/logger.js';

export const validateRequest = (schema) => async (req, res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (error) {
    logger.warn(`Validación fallida: ${JSON.stringify(error.errors)}`);
    return res.status(400).json({
      message: 'Error de validación de datos',
      errors: error.errors.map(err => ({ field: err.path.join('.'), message: err.message }))
    });
  }
};
