const db = require('../models');

exports.getAllParts = async (req, res) => {
    try {
        const parts = await db.Part.findAll();
        res.json(parts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addPart = async (req, res) => {
    const { name, quantity, price } = req.body;

    try {
        const newPart = await db.Part.create({ name, quantity, price });
        res.status(201).json(newPart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePartQuantity = async (req, res) => {
    const { quantity } = req.body;
    const { id } = req.params;

    try {
        const part = await db.Part.findByPk(id);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        part.quantity = quantity;
        await part.save();
        res.json(part);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
