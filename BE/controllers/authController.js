const db = require('../models');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await db.User.findOne({ where: { username } });
        console.log(user); // Log the user object
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        console.log(password)
        console.log(user.password)
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        console.log(isPasswordValid); // Log the result of password comparison
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        req.session.userId = user.id;
        res.json({ id: user.id, username: user.username, role: user.role_id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
