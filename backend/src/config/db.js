import mongoose from 'mongoose';
import logger from './logger.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger.info(`MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error de conexión a MongoDB: ${error.message}`);
    process.exit(1);
  }
};
