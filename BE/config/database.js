const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('car_service', 'user', 'password', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = sequelize;
