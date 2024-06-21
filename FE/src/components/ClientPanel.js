import React, { useState, useEffect } from 'react';
import { getClientOrders, scheduleAppointment, } from '../services/api';

const ClientPanel = () => {
    const [orders, setOrders] = useState([]);
    const [appointment, setAppointment] = useState({ date: '', time: '' });

    useEffect(() => {
        // Fetch client orders from the backend
        getClientOrders().then(data => setOrders(data));
    }, []);

    const handleScheduleAppointment = (e) => {
        e.preventDefault();
        scheduleAppointment(appointment).then(newAppointment => {
            setOrders([...orders, newAppointment]);
            setAppointment({ date: '', time: '' });
        });
    };

    const handleDownloadInvoice = (orderId) => {
        // getInvoice(orderId).then(invoice => {
        //     // Handle invoice download
        //     console.log(invoice);
        // });
    };

    return (
        <div>
            <h1>Client Panel</h1>
            <form onSubmit={handleScheduleAppointment}>
                <label>
                    Date:
                    <input
                        type="date"
                        value={appointment.date}
                        onChange={(e) => setAppointment({ ...appointment, date: e.target.value })}
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        value={appointment.time}
                        onChange={(e) => setAppointment({ ...appointment, time: e.target.value })}
                    />
                </label>
                <button type="submit">Schedule Appointment</button>
            </form>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.description} - Status: {order.status}
                        <button onClick={() => handleDownloadInvoice(order.id)}>Download Invoice</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientPanel;
