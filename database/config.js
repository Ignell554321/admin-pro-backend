const mongose= require('mongoose');

//retorna una promesa
const dbConnection = async()=>{

    try{
        await mongose.connect(process.env.DB_CNN);

        console.log('DB CONECT');
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }

}

module.exports={
    dbConnection
}