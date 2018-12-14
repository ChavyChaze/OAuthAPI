const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema
const userSchema = new Schema({
    email: String,
    password: String
});

// Model
const User = mongoose.model('user', userSchema);

module.exports = User;