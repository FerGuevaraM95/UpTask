const express = require('express');
const routes = require('./routes');

// Crear una app de express
const app = express();

// Ruta para el home
app.use('/', routes());

app.listen(3000);