const { Sequelize } = require("sequelize");

const Connection = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + "/database.sqlite"
});

module.exports = Connection;