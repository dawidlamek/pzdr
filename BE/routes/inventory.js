const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authenticateSession = require('../middleware/authMiddleware');

router.get('/', authenticateSession, inventoryController.getAllParts);

module.exports = router;
