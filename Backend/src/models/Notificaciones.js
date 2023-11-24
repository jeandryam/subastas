const mongoose = require('mongoose');

const notificacionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  sender: {
    type: String,
    required: true,
  },
  reciper: {
    type: String,
    required: true,
  },
  messanger: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  link_to: {
    type: String,
  },
  status: {
    type: String,
    default: 'pending', // Puedes ajustar esto según tus necesidades
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

module.exports = Notificacion;
