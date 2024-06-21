const db = require('../models'); // Ensure this path is correct

const initDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
};

module.exports = initDatabase;
