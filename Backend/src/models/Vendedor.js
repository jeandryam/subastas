const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  nombre: String,
  // Otros campos relacionados con el vendedor
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;
