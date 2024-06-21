const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Part = require('./part')(sequelize, Sequelize);
const Appointment = require('./appointment')(sequelize, Sequelize);
const Order = require('./order')(sequelize, Sequelize);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Part = Part;
db.Appointment = Appointment;
db.Order = Order;

User.associate = function(models) {
    User.hasMany(models.Appointment, { foreignKey: 'client_id' });
    User.hasMany(models.Order, { foreignKey: 'user_id' });
};

Appointment.associate = function(models) {
    Appointment.belongsTo(models.User, { foreignKey: 'client_id' });
};

Order.associate = function(models) {
    Order.belongsTo(models.User, { foreignKey: 'user_id' });
};

module.exports = db;
