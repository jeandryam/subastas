const Vendedor = require('../models/Vendedor');

const obtenerTodosLosVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedor.find();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los vendedores' });
  }
};

// Otros métodos del controlador relacionados con vendedores
