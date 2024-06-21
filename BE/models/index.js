const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Part = require('./part')(sequelize, Sequelize);
const Appointment = require('./appointment')(sequelize, Sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Part = Part;
db.Appointment = Appointment;

// Associations
User.hasMany(Appointment, { foreignKey: 'client_id' });
Appointment.belongsTo(User, { foreignKey: 'client_id', as: 'client' });

module.exports = db;
