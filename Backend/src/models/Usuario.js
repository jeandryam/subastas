const Usuario = require('../models/Usuario');

// Obtener todos los usuarios
const obtenerTodosLosUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  const { userId } = req.params;

  try {
    const usuario = await Usuario.findById(userId);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear un nuevo usuario
const crearUsuario = async (req, res) => {
  const { nombre, correoElectronico, contraseña } = req.body;

  try {
    const nuevoUsuario = new Usuario({
      nombre,
      correoElectronico,
      contraseña,
    });

    await nuevoUsuario.save();
    res.status(201).send('Usuario creado exitosamente');
  } catch (error) {
    console.error('Error al crear usuario:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar un usuario por ID
const actualizarUsuario = async (req, res) => {
  const { userId } = req.params;
  const { nombre, correoElectronico, contraseña } = req.body;

  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      userId,
      { nombre, correoElectronico, contraseña },
      { new: true }
    );

    if (usuarioActualizado) {
      res.json(usuarioActualizado);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar usuario:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar un usuario por ID
const eliminarUsuario = async (req, res) => {
  const { userId } = req.params;

  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(userId);

    if (usuarioEliminado) {
      res.json(usuarioEliminado);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};
