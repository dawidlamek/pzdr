import React, { useState, useEffect } from 'react';
import { getOrders} from '../services/api';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ description: '', status: '', userId: '' });

    useEffect(() => {
        getOrders().then(data => setOrders(data));
    }, []);

    const handleCreateOrder = (e) => {
        // e.preventDefault();
        // createOrder(newOrder).then(order => {
        //     setOrders([...orders, order]);
        //     setNewOrder({ description: '', status: '', userId: '' });
        // });
    };

    return (
        <div>
            <h1>Orders</h1>
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
                        type="text"
                        value={newOrder.userId}
                        onChange={(e) => setNewOrder({ ...newOrder, userId: e.target.value })}
                    />
                </label>
                <button type="submit">Create Order</button>
            </form>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>
                        {order.description} - Status: {order.status} - User ID: {order.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
