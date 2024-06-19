const express = require('express');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('../routes/inventory');
const db = require('../models');

app.use(cors());
app.use(express.json());
app.use('/inventory', inventoryRoutes);

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
