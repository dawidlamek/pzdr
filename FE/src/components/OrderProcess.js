import React, { useState, useEffect } from 'react';
import { getOrders, createOrder } from '../services/api';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ description: '', status: 'zlecenie', userId: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        getOrders()
            .then(data => setOrders(data))
            .catch(err => setError(err.message));
    }, []);

    const handleCreateOrder = (e) => {
        e.preventDefault();
        createOrder(newOrder)
            .then(order => {
                setOrders([...orders, order]);
                setNewOrder({ description: '', status: 'zlecenie', userId: '' });
                setError(null);
                setSuccess('Order created successfully');
            })
            .catch(err => {
                setSuccess(null);
                setError(err.message);
            });
    };

    return (
        <div>
            <h1>Orders</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleCreateOrder}>
                <label>
                    Description:
                    <input
                        type="text"
                        value={newOrder.description}
                        onChange={(e) => setNewOrder({ ...newOrder, description: e.target.value })}
                    />
                </label>
                <label>
                    Status:
                    <input
                        type="text"
                        value={newOrder.status}
                        onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
                    />
                </label>
                <label>
                    User ID:
                    <input
                        type="number"
                        value={newOrder.userId}
                        onChange={(e) => setNewOrder({ ...newOrder, userId: parseInt(e.target.value, 10) })}
                    />
                </label>
                <button type="submit">Create Order</button>
            </form>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.description} - Status: {order.status} - User ID: {order.user_id}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
