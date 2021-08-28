const { DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const Post = connection.define("Post", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})