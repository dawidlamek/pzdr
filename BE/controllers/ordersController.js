const db = require('../models');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await db.Order.findAll();
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    try {
        const order = await db.Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order.status = status;
        await order.save();
        res.json(order);
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.createOrder = async (req, res) => {
    const { description, status, user_id } = req.body;

    try {
        const newOrder = await db.Order.create({ description, status, user_id });
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: error.message });
    }
};
