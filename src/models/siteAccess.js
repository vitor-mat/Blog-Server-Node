const { DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const siteAccess = connection.define("siteAccess", {
    allAccess:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ano:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mes:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports = siteAccess