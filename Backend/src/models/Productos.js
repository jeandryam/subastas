const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  detallesProducto: {
    type: String,
  },
  precioMinimo: {
    type: Number,
    required: true,
  },
  precioMaximo: {
    type: Number,
    required: true,
  },
  alerta: {
    type: Boolean,
    default: false, // Puedes ajustar esto según tus necesidades
  },
  oferta: {
    type: Boolean,
    default: false, // Puedes ajustar esto según tus necesidades
  },
  destacado: {
    type: Boolean,
    default: false, // Puedes ajustar esto según tus necesidades
  },
  visitas: {
    type: Number,
    default: 0,
  },
  productoActivo: {
    type: Boolean,
    default: true,
  },
  tiempo: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  // Puedes agregar más campos según tus necesidades
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
