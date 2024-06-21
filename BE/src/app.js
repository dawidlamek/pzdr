const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('../routes/inventory');
const authRoutes = require('../routes/auth');
const appointmentsRoutes = require('../routes/appointments');
const db = require('../models');

// Use CORS middleware with specific origin and credentials
app.use(cors({
    origin: 'http://localhost',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());

// Use session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/appointments', appointmentsRoutes);

const PORT = process.env.PORT || 8080;

db.sequelize.sync()
    .then(() => {
        console.log('Database synchronized successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });
