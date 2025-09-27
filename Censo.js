// models/Censo.js
const mongoose = require('mongoose');

// Define el esquema (Schema) del Censo
const CensoSchema = new mongoose.Schema({
  // Nota: El campo ID es el "_id" que Mongoose y MongoDB crean automáticamente.
  
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio.'],
    trim: true
  },
  edad: {
    type: Number,
    required: [true, 'La edad es obligatoria.'],
    min: [0, 'La edad no puede ser negativa.']
  },
  sexo: {
    type: String,
    required: [true, 'El sexo es obligatorio.'],
    enum: {
      values: ['Masculino', 'Femenino', 'Otro'],
      message: '{VALUE} no es un sexo válido.'
    }
  },
  localidad: {
    type: String,
    required: [true, 'La localidad es obligatoria.'],
    trim: true
  }
}, {
  timestamps: true // Agrega campos createdAt y updatedAt
});

// Exporta el modelo (la colección se llamará "censos" automáticamente)
module.exports = mongoose.model('Censo', CensoSchema);