const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Part = require('./part')(sequelize, Sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Part = Part;

module.exports = db;
