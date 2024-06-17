import React, { useState, useEffect } from 'react';
import { getServiceOrders, updateOrderStatus } from '../services/api';

const ServicePanel = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch service orders from the backend
        getServiceOrders().then(data => setOrders(data));
    }, []);

    const handleUpdateStatus = (orderId, status) => {
        updateOrderStatus(orderId, status).then(updatedOrder => {
            setOrders(orders.map(order => (order.id === orderId ? updatedOrder : order)));
        });
    };

    return (
        <div>
            <h1>Service Panel</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.description} - Status: {order.status}
                        <button onClick={() => handleUpdateStatus(order.id, 'In Progress')}>Start</button>
                        <button onClick={() => handleUpdateStatus(order.id, 'Completed')}>Complete</button>
                        <button onClick={() => handleUpdateStatus(order.id, 'Rejected')}>Reject</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicePanel;
