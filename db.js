//Clase de pg que necesitamos
const { Pool } = require('pg');

//Credenciales para poder acceder a la base de datos
const pool = new Pool({
  user: 'miusuario',
  host: 'localhost',
  database: 'mibasededatos',
  password: 'mipassword',
  port: 5433, //Estuve toda la tarde con problemas y era por que estaba usando Docker y el puerto lo estaba usando PosgreSQL XD
});

//Para exportar "pool"
module.exports = pool;