// server.js
const express = require('express');
const connectDB = require('./config/db'); // 1. Importa la función de conexión
require('dotenv').config(); 

// Importa las rutas del censo (la lógica POST/GET)
const censoRoutes = require('./routes/censoRoutes');

// 2. Ejecuta la conexión a la base de datos
connectDB();

const app = express();

// Middleware esencial: permite a Express leer JSON en el cuerpo de las peticiones (necesario para el POST)
app.use(express.json());

// Monta las rutas: todas las peticiones a /censo serán manejadas por censoRoutes
app.use('/censo', censoRoutes);

// Endpoint simple de prueba
app.get('/', (req, res) => {
    res.send('Servicio Web de Censo activo. Prueba enviando peticiones a /censo.');
});

// Obtiene el puerto del .env (3000)
const PORT = process.env.PORT || 3000;

// 3. Inicia el servidor Express
app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
});