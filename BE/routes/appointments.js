const express = require('express');
const router = express.Router();
const appointmentsController = require('../controllers/appointmentsController');
const authenticateSession = require('../middleware/authMiddleware');

router.get('/', authenticateSession, appointmentsController.getAllAppointments);
router.post('/', authenticateSession, appointmentsController.scheduleAppointment);

module.exports = router;