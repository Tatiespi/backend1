const express = require ('express')
require ('dotenv').config()
const {dbConnection }= require('./database/config')
const cors= require('cors')

//Crear express app
const app = express();

//Base Datos
dbConnection();

//CORS
app.use( cors() )

app.use(express.static('public'))

// const bodyParser = require('body-parser');

// create application/json parser

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/task', require('./routes/task'));


//Escuchar en puerto 4000
app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})

