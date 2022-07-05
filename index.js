// const express = require('express');
import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'



const app = express();

// Conectar la base de datos
db.authenticate().then(() => {
    console.log('Base de datos conectada')
}).catch((error) => {
    console.log(error)
})


// Definir puerto
const port = process.env.PORT || 4000;

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();

    // Crear variables para pasarla a las listas
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    
     next();
})



// HABILITAR PUG
app.set('view engine', 'pug');

// Agregar Body parser para leer los datos del form
app.use(express.urlencoded({extended: true}))

// Definir la carpeta publica
app.use(express.static('public'))

// Agregar router
app.use('/', router)

app.use('/viajes', express.static('public'));

app.listen(port, () => {
    console.log(`${port} es el servidor funcionando`)
})