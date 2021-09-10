const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true,'email is required']
    },
    message: {
        type: String,
        required: [true, 'message is required']
    },
}, {timestamps: true})

module.exports = mongoose.model('Contact',contactSchema);