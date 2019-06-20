const express = require('express');
const router = express.Router();

// importar el controlador
const proyectosController = require
('../controllers/proyectosController');

module.exports = function() {
    // Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    // Ruta nuevo proyecto
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    // Ruta postear proyecto
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);

    return router;
}