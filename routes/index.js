const express = require('express');
const router = express.Router();

// Importar express validator
const { body } = require('express-validator/check');

// importar el controlador
const proyectosController = require
('../controllers/proyectosController');

module.exports = function() {
    // Ruta para el home
    router.get('/', proyectosController.proyectosHome);
    // Ruta nuevo proyecto
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    // Ruta postear proyecto
    router.post('/nuevo-proyecto',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.nuevoProyecto
    );
    // Listar Proyectos
    router.get('/proyectos/:url', proyectosController.proyectoPorUrl);
    // Actualizar proyecto
    router.get('/proyecto/editar/:id', proyectosController.formularioEditar);
    router.post('/nuevo-proyecto/:id',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.actualizarProyecto
    );

    return router;
}