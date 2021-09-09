const { DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const siteAccess = connection.define("siteAccess", {
    siteAccess:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = siteAccess