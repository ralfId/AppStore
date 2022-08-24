const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const AverageRating = db.define('AverageRating', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, appId: {
        type: DataTypes.INTEGER,
    },
    average: {
        type: DataTypes.INTEGER,
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

module.exports = AverageRating;