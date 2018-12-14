const User = require('../models/user');

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        // Check is email not already used
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email already in use' });
        }

        // Create a new user
        const newUser = new User({
            email,
            password
        });
        await newUser.save();

        // Response with token
        res.json({ user: 'created' });
    },

    signIn: async (req, res, next) => {

    },

    secret: async (req, res, next) => {

    }
};