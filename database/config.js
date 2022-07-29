const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async()=>{
    try {
        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    dbConnection
}