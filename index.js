const express = require('express');
const path = require('path');
const routes = require('./routes');

// Crear una app de express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Enrutador
app.use('/', routes());

app.listen(3000);