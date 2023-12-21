const config = {
    appConfig: {
        port: process.env.PORT
    },
    dbConfig: {
        dbName: process.env.DB_NAME,
        dbPort: process.env.DB_PORT,
        dbHost: process.env.DB_HOST
    }
}

module.exports = config