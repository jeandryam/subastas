const express = require('express');
const connectDB = require('./confing/db');

const app = express();

// Conéctate a la base de datos
connectDB();

// Resto de la configuración y rutas
