const mongoose = require('mongoose');

const subastaSchema = new mongoose.Schema({
  subasta_id: {
    type: String,
    required: true,
  },
  producto_id: {
    type: String,
    required: true,
  },
  usuario_id: {
    type: String,
    required: true,
  },
  oferta_actual: {
    type: Number,
    required: true,
  },
  tiempo_restante: {
    type: String,
  },
  fecha_inicio: {
    type: Date,
    default: Date.now,
  },
  fecha_fin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    default: 'En curso', // Puedes ajustar esto según tus necesidades
  },
  // Puedes agregar más campos según tus necesidades
});

const Subasta = mongoose.model('Subasta', subastaSchema);

module.exports = Subasta;
