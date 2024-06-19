const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('../routes/inventory');
const authRoutes = require('../routes/auth');
const db = require('../models');


app.use(cors({
    origin: 'http://localhost',
    credentials: true
}));
app.use(express.json());


app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use('/inventory', inventoryRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
