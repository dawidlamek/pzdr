const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const inventoryRoutes = require('../routes/inventory'); // Ensure correct path
const authRoutes = require('../routes/auth'); // Ensure correct path
const appointmentsRoutes = require('../routes/appointments'); // Ensure correct path
const ordersRoutes = require('../routes/orders'); // Ensure correct path
const db = require('../models'); // Ensure correct path

// Use CORS middleware with specific origin and credentials
app.use(cors({
    origin: 'http://localhost', // Allow requests from the frontend
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
    cookie: { secure: false } // Set to true if using https
}));

app.use('/auth', authRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/orders', ordersRoutes); // Add orders route

const PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: false }) // Ensure `force: false` to avoid dropping tables
    .then(() => {
        console.log('Database synchronized successfully.');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });
