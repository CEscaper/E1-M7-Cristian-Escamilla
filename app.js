// Importamos el pool que configuramos en db.js
const pool = require('./db');


// PARTE 1: Obtener todos los usuarios
async function obtenerUsuarios() {
  try {
    const resultado = await pool.query('SELECT * FROM usuarios');
    console.log('Todos los usuarios:');
    console.log(resultado.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

// Llamamos a la función
obtenerUsuarios();


// PARTE 2: Buscar usuario por email de forma segura
async function obtenerUsuarioPorEmail(email) {
  try {
    const consulta = 'SELECT * FROM usuarios WHERE email = $1';
    const valores = [email];

    const resultado = await pool.query(consulta, valores);

    if (resultado.rows.length === 0) {
      console.log('No se encontró ningún usuario con ese email');
    } else {
      console.log('Usuario encontrado:');
      console.log(resultado.rows[0]);
    }
  } catch (error) {
    console.error('Error al buscar usuario:', error);
  }
}

// Probamos con un email que SÍ existe
obtenerUsuarioPorEmail('ana.garcia@example.com');

// Probamos con un email que NO existe
obtenerUsuarioPorEmail('noexiste@example.com');