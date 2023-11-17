const express = require('express');
const vendedorController = require('../controllers/vendedorController');

const router = express.Router();

router.get('/vendedores', vendedorController.obtenerTodosLosVendedores);
// Definir otras rutas relacionadas con vendedores

module.exports = router;
