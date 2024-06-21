const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const authenticateSession = require('../middleware/authMiddleware');

router.get('/', authenticateSession, ordersController.getAllOrders);
router.put('/:id', authenticateSession, ordersController.updateOrderStatus);
router.post('/', authenticateSession, ordersController.createOrder); // Add this line

module.exports = router;
