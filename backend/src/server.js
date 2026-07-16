import 'dotenv/config';

import app from './app.js';
import { connectDB } from './config/db.js';
import logger from './config/logger.js';
import { validateEnv } from './utils/validateEnv.js';

// Validar entorno (Fail-fast)
validateEnv();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Conectar a Base de Datos
  await connectDB();

  // Iniciar Servidor
  app.listen(PORT, () => {
    logger.info(`Servidor corriendo en entorno ${process.env.NODE_ENV} en el puerto ${PORT}`);
  });
};

startServer();
