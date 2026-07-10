import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'], 
    trim: true, 
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres'] 
  },
  email: { 
    type: String, 
    required: [true, 'El email es obligatorio'], 
    trim: true, 
    lowercase: true,
    maxlength: [150, 'El email es demasiado largo'],
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido'] // Defensa en profundidad
  },
  telefono: { 
    type: String, 
    trim: true,
    maxlength: [20, 'El teléfono no puede exceder los 20 caracteres'],
    default: ''
  },
  mensaje: { 
    type: String, 
    required: [true, 'El mensaje es obligatorio'], 
    trim: true, 
    maxlength: [1000, 'El mensaje no puede exceder los 1000 caracteres'] 
  },
  estado: { 
    type: String, 
    enum: ['nuevo', 'contactado', 'descartado'], 
    default: 'nuevo' 
  },
}, { 
  timestamps: true // Crea campos createdAt y updatedAt automáticamente
});

export default mongoose.model('Lead', leadSchema);
