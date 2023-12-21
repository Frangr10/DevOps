const express = require('express')
//const bodyParser = require ('body-parser')

const { dataBaseConnection } = require ('../db/database')
const productsRoutes = require ('../routes/products.routes')

 //const app = express()
 //app.use('/', require ('../routes/products.routes'))
 
 /*
 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 
}

module.exports = app */

class Server {

    constructor(){
        this.app = express();
        this.dataBaseConnection()
        //this.userPath = '/'
        //this.middleware()
        this.router()
    }

    async dataBaseConnection(){
        await dataBaseConnection()
      }

    /* middleware() {
        this.app.use(cors());
        this.app.use(express.json());
    } */

    router() {
        this.app.use('/', productsRoutes)
    }

}

module.exports = Server;