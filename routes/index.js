const express = require('express');
const router = express.Router();

// Importar express validator
const { body } = require('express-validator/check');

// importar los controladores
const proyectosController = require('../controllers/proyectosController');
const tareasController = require('../controllers/tareasController');
const usuariosController = require('../controllers/usuariosController');

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
    // Actualizar Proyecto
    router.get('/proyecto/editar/:id', proyectosController.formularioEditar);
    router.post('/nuevo-proyecto/:id',
        body('nombre').not().isEmpty().trim().escape(),
        proyectosController.actualizarProyecto
    );
    // Eliminar Proyecto
    router.delete('/proyectos/:url', proyectosController.eliminarProyecto);
    // Tareas
    router.post('/proyectos/:url', tareasController.agregarTarea);
    // Actualizar tarea
    router.patch('/tareas/:id', tareasController.cambiarEstadoTarea);
    // Eliminar tarea
    router.delete('/tareas/:id', tareasController.eliminarTarea);

    // Crear nueva cuenta
    router.get('/crear-cuenta', usuariosController.formCrearCuenta);
    router.post('/crear-cuenta', usuariosController.crearCuenta);

    return router;
}