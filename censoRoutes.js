// routes/censoRoutes.js
const express = require('express');
const router = express.Router();
const Censo = require('../models/Censo'); 

// *** 4. POST /censo: Agregar un nuevo registro. ***
router.post('/', async (req, res) => {
  try {
    const nuevoRegistro = new Censo(req.body);

    const registroGuardado = await nuevoRegistro.save();

    // 201 Created - Devuelve el objeto recién creado
    res.status(201).json(registroGuardado);
  } catch (error) {
    // 400 Bad Request - Errores de validación (ej. falta un campo requerido)
    res.status(400).json({ 
      msg: 'Error al agregar registro. Verifique los campos: nombre, edad, sexo, localidad.', 
      error: error.message 
    });
  }
});


// *** 5. GET /censo: Listar todos los registros del censo. ***
router.get('/', async (req, res) => {
  try {
    const registros = await Censo.find();
    
    // 200 OK - Devuelve el array de todos los registros
    res.json(registros);
  } catch (error) {
    // 500 Internal Server Error
    res.status(500).json({ msg: 'Error al obtener todos los registros.', error: error.message });
  }
});


// *** 6. GET /censo/<id>: obtener registro específico. ***
router.get('/:id', async (req, res) => {
  try {
    // Busca un documento por su ID (_id)
    const registro = await Censo.findById(req.params.id);

    // 404 Not Found - Si el ID es válido pero no existe el registro
    if (!registro) {
      return res.status(404).json({ msg: `Registro con ID ${req.params.id} no encontrado.` });
    }

    // 200 OK - Devuelve el objeto individual
    res.json(registro);
  } catch (error) {
    // Maneja errores de formato de ID (ej. si el ID tiene un formato inválido)
    res.status(500).json({ msg: 'Error al obtener registro específico. El ID podría ser inválido.', error: error.message });
  }
});

module.exports = router;