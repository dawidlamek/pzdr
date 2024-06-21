const db = require('../models');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await db.Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.scheduleAppointment = async (req, res) => {
    const { date, time, clientId } = req.body;

    try {
        const newAppointment = await db.Appointment.create({ date, time, client_id: clientId });
        res.status(201).json(newAppointment);
    } catch (error) {
        console.error('Error scheduling appointment:', error);
        res.status(500).json({ message: error.message });
    }
};
