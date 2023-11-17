const express = require('express');
const multer = require('multer'); // Para procesar archivos

const app = express();
const port = 3000;

// Configuración de multer para manejar la carga de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // La carpeta donde se almacenarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nombre del archivo
  },
});

const upload = multer({ storage: storage });

// Ruta para la carga de archivos
app.post('/upload', upload.single('productImage'), (req, res) => {
  // En este punto, la imagen ya está almacenada en el servidor.
  // Deberías guardar la referencia (por ejemplo, la ruta del archivo) en la base de datos.
  const imagePath = 'uploads/' + req.file.filename;
  res.json({ imagePath });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
