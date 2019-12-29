const express = require('express');
const routes = require('./routes');
require('./database'); //Importa o index.js para executar a conection

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3300, ()=> console.log('Application started on port 3300'));