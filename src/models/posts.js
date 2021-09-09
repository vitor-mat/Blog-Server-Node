const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../database/db.js");

const Post = connection.define("post", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ano:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mes:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    acessos:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Post;