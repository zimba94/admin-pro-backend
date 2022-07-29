require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


const app = express();

//Cors
app.use(cors());

//Base de datos
dbConnection();

//ZimbaCode
//y5g2p8JkV3lC4nlR

//Rutas

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: "Hola Zimba"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})