const { DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const siteAccess = connection.define("siteAccess", {
    allAccess:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = siteAccess