const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authenticateSession = require('../middleware/authMiddleware');

router.get('/', authenticateSession, inventoryController.getAllParts);
router.post('/', authenticateSession, inventoryController.addPart);
router.put('/:id', authenticateSession, inventoryController.updatePartQuantity);

module.exports = router;
