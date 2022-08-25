const { DataTypes } = require('sequelize');
const db = require("../db/connection");
const Category = require('./category');

const Application = db.define('App', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    developer: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    categoryId: {
        type: DataTypes.INTEGER,

    },
    isInstalled: {
        type: DataTypes.BOOLEAN,
    }
});

Application.hasOne(Category, { foreignKey: 'id' });

module.exports = Application;