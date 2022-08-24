const { Sequelize } = require('sequelize');

const db = new Sequelize('AppStoreDB', 'root', 'stefa2020',{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;