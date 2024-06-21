const authenticateSession = (req, res, next) => {
    console.log('Session:', req.session);
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

module.exports = authenticateSession;
