const Producto = require('../models/Producto');

// Obtener todos los productos
const obtenerTodosLosProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
  const { productoId } = req.params;

  try {
    const producto = await Producto.findById(productoId);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener producto por ID:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Crear un nuevo producto
const crearProducto = async (req, res) => {
  const { sku, categoria, detallesProducto, precioMinimo, precioMaximo, alerta, oferta, destacado, visitas, productoActivo, tiempo } = req.body;

  try {
    const nuevoProducto = new Producto({
      sku,
      categoria,
      detallesProducto,
      precioMinimo,
      precioMaximo,
      alerta,
      oferta,
      destacado,
      visitas,
      productoActivo,
      tiempo,
    });

    await nuevoProducto.save();
    res.status(201).send('Producto creado exitosamente');
  } catch (error) {
    console.error('Error al crear producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Actualizar un producto por ID
const actualizarProducto = async (req, res) => {
  const { productoId } = req.params;
  const { sku, categoria, detallesProducto, precioMinimo, precioMaximo, alerta, oferta, destacado, visitas, productoActivo, tiempo } = req.body;

  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      productoId,
      {
        sku,
        categoria,
        detallesProducto,
        precioMinimo,
        precioMaximo,
        alerta,
        oferta,
        destacado,
        visitas,
        productoActivo,
        tiempo,
      },
      { new: true }
    );

    if (productoActualizado) {
      res.json(productoActualizado);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminar un producto por ID
const eliminarProducto = async (req, res) => {
  const { productoId } = req.params;

  try {
    const productoEliminado = await Producto.findByIdAndDelete(productoId);

    if (productoEliminado) {
      res.json(productoEliminado);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (error) {
    console.error('Error al eliminar producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  obtenerTodosLosProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
