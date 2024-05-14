

const { error } = require('console');
const http = require('http');
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodePrueba',
  multipleStatements: true,
  insecureAuth: true, 
  port: 5432
})



client.connect((error) => {
  if (error) {
    console.error('Error de coneccion');
    process.exit(1);
  }

  console.log('Conectado a la base de datos')
})

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

//port 8020 server
server.listen(8020, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8020');
});

console.log('Prueba')