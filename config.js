require('dotenv').config();

module.exports = {
    db: {
        host: process.env.MYSQL_DATABASE_HOST,
        user: process.env.MYSQL_DATABASE_USER,
        password: process.env.MYSQL_DATABASE_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_DATABASE_PORT
    }
}