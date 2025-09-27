// config/db.js
const mongoose = require('mongoose');
// Requiere dotenv para que Node.js lea el MONGO_URI de tu archivo .env
require('dotenv').config(); 

const connectDB = async () => {
  try {
    // Intenta conectar usando la variable MONGO_URI
    await mongoose.connect(process.env.MONGO_URI);
    
    // Si tiene éxito, imprime el mensaje clave
    console.log('✅ MongoDB conectado exitosamente.');
  } catch (err) {
    // Si falla, imprime el error y cierra la aplicación
    console.error('❌ Error de conexión a MongoDB:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;