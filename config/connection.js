const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
    // connect to Heroku remote database if available
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // connect to local database
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });    
}

module.exports = sequelize;