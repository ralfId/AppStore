const { DataTypes } = require('sequelize');
const db = require("../db/connection");
const Application = require('./application');

const Category = db.define('Category', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, name: {
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

// Category.hasMany(Application, {foreignKey: 'id'});

module.exports = Category;