import React, { useState, useEffect } from 'react';
import { getAppointments, scheduleAppointment } from '../services/api';

const Calendar = () => {
    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({ date: '', time: '', client: '' });

    useEffect(() => {
        // Fetch appointments data from the backend
        getAppointments().then(data => setAppointments(data));
    }, []);

    const handleScheduleAppointment = (e) => {
        e.preventDefault();
        scheduleAppointment(newAppointment).then(appointment => {
            setAppointments([...appointments, appointment]);
            setNewAppointment({ date: '', time: '', client: '' });
        });
    };

    return (
        <div>
            <h1>Calendar</h1>
            <form onSubmit={handleScheduleAppointment}>
                <label>
                    Client:
                    <input
                        type="text"
                        value={newAppointment.client}
                        onChange={(e) => setNewAppointment({ ...newAppointment, client: e.target.value })}
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        value={newAppointment.date}
                        onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        value={newAppointment.time}
                        onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                    />
                </label>
                <button type="submit">Schedule Appointment</button>
            </form>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        {appointment.client} - {appointment.date} {appointment.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Calendar;
