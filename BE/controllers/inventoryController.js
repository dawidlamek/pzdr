const db = require('../models');

exports.getAllParts = async (req, res) => {
    try {
        const parts = await db.Part.findAll();
        res.json(parts);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
