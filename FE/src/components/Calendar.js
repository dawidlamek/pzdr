import React, { useState, useEffect } from 'react';
import { getAppointments, scheduleAppointment } from '../services/api';

const Calendar = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ date: '', time: '', clientId: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        // Fetch appointments data from the backend
        getAppointments()
            .then(data => setAppointments(data))
            .catch(err => setError(err.message));
    }, []);

    const handleScheduleAppointment = (e) => {
        e.preventDefault();
        // Convert clientId to an integer
        const appointmentToSchedule = {
            ...newAppointment,
            clientId: parseInt(newAppointment.clientId, 10)
        };
        
        scheduleAppointment(appointmentToSchedule)
            .then(appointment => {
                setAppointments([...appointments, appointment]);
                setNewAppointment({ date: '', time: '', clientId: '' });
                setError(null);
                setSuccess('Appointment scheduled successfully');
            })
            .catch(err => {
                setSuccess(null);
                setError(err.message);
            });
    };

    return (
        <div>
            <h1>Calendar</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleScheduleAppointment}>
                <div>
                    <label>
                        Client ID:
                        <input
                            type="number"
                            value={newAppointment.clientId}
                            onChange={(e) => setNewAppointment({ ...newAppointment, clientId: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Date:
                        <input
                            type="date"
                            value={newAppointment.date}
                            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Time:
                        <input
                            type="time"
                            value={newAppointment.time}
                            onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                        />
                    </label>
                </div>
                <button type="submit">Schedule Appointment</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.clientId}</td>
                            <td>{new Date(appointment.date).toLocaleDateString()}</td>
                            <td>{appointment.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
