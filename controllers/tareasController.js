const Proyectos = require('../models/Proyectos');
const Tareas = require('../models/Tareas');

exports.agregarTarea = async (req, res, next) => {
    // obtenemos el proyecto actual
    const proyecto = await Proyectos.findOne({where: {url: req.params.url}});

    // leer el valor del input
    const { tarea } = req.body;

    // estado 0 = incompleto y ID de Proyecto
    const estado = 0;
    const proyectoId = proyecto.id;

    // Insertar en la base de datos
    const resultado = await Tareas.create({tarea, estado, proyectoId});

    if(!resultado) {
        next();
    }

    // redireccionar
    res.redirect(`/proyectos/${req.params.url}`);
} 

exports.cambiarEstadoTarea = (req, res) => {
    res.send('Todo bien...');
}