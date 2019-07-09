const express = require('express');
const path = require('path');
const bodyParser =require('body-parser');
const routes = require('./routes');

// Helpers con algunas funciones
const helpers = require('./helpers');

// Conectar la DB
const db = require('./config/db');

// Importar los modelos
require('./models/Proyectos');
require('./models/Tareas');
require('./models/Usuarios');

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.error(error));

// Crear una app de express
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Pasar vardump a la aplicación
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    res.locals.year = 2019;
    next();
});

// Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

// Enrutador
app.use('/', routes());

app.listen(3000);