const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  flag_active: {
    type: Boolean,
    default: true, // Puedes ajustar esto según tus necesidades
  },
  platform_id: {
    type: String,
  },
  customer_id: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Puedes agregar validaciones de correo electrónico aquí si es necesario
  },
  password: {
    type: String,
    required: true,
    // Puedes agregar validaciones de contraseña aquí si es necesario
  },
  image: {
    type: String,
  },
  role: {
    type: String,
  },
  role_key: {
    type: String,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  // Puedes agregar más campos según tus necesidades
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
