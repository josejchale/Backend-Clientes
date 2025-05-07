// index.js
const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientes');

app.use(express.json()); // para leer JSON
app.use('/clientes', clientesRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
