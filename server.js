//Importamos las librerias
const express = require('express');
const pool = require('./db');

//Creamos la aplicacion
const app = express();
//Le digo al servidor que sepa leer JSON cuando alguien envie datos
app.use(express.json());

//Se crea el puerto
const PORT = 3000;

//Cuando alguien visita el local host el server responde
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Servidor funcionando!' });
});

//Aqui probamos la connecion con la db, le pedimos hora, si no llega, error.
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as hora');
    res.json({ 
      mensaje: 'Conexión a DB exitosa',
      hora_servidor: result.rows[0].hora 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Encendemos el server en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
