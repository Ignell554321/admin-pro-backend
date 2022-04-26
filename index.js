require('dotenv').config();

const express=require('express');
const cors=require('cors');

const {dbConnection} = require('./database/config');


//crear el servidor de express
const app=express();

//Configurar CORS
app.use(cors());

//Base de datos
dbConnection();

//console.log(process.env);

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto'+3000);
})

//rutas
app.get('/',(req,res)=>{

    res.status(400).json({
        ok:true,
        msg:'Hola Mundo'
    });

});
