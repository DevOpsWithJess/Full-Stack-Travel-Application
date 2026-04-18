const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign(
            { username: username },
            'MY_SECRET_KEY',
            { expiresIn: '1h' }
        );

        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = {
    login
};