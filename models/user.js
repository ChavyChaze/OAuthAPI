const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

// Model
const User = mongoose.model('user', userSchema);

module.exports = User;