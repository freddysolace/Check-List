const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true,'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Username is required']
    },
}, {timestamps: true})

module.exports = mongoose.model('Users',userSchema);