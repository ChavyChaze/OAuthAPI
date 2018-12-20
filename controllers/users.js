const JWT = require('jsonwebtoken');

const User = require('../models/user');
const { JWT_SECRET } = require('./../config');

signToken = user => {
    return JWT.sign({
        iss: 'Lemon',
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

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

        //Generate the token
        const token = signToken(newUser);

        // Response with token
        res.status(200).json({ token });
    },

    signIn: async (req, res, next) => {

    },

    secret: async (req, res, next) => {

    }
};