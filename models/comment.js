const { DataTypes } = require('sequelize');
const db = require("../db/connection");

const Comment = db.define('Comment', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, appId: {
        type: DataTypes.INTEGER,
    },
    userName: {
        type: DataTypes.STRING,
    },
    comment: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }
});

module.exports = Comment;