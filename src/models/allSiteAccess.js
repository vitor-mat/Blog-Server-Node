const { DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const allSiteAccess = connection.define("allSiteAccess", {
    allAccess:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = allSiteAccess