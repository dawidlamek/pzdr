const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Part = require('./part')(sequelize, Sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Part = Part;

module.exports = db;
