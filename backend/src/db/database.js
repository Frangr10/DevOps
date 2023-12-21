const mongoose = require('mongoose');
const express = require ('express')
const { appConfig, dbConfig } = require ('../../../config')



const dataBaseConnection = async() => {

    const appPort = appConfig.port
    const host = dbConfig.dbHost
    const port = dbConfig.dbPort
    const database = dbConfig.dbName
    const app = express()

    try{
        
            const uri = `mongodb://${host}:${port}/${database}`
            mongoose.connect(uri)
            console.log("Conexion Exitosa con la base de datos")
            console.log(`${uri}`)
            mongoose.connection.on('open', () => console.log('Conectado a db'))

            app.listen(appPort);
            console.log(`listening on port ${appPort}`)
        
    } catch(error) {
        console.error({message: error.message})
        process.exit(0)
    }
}


module.exports = {
    dataBaseConnection
}