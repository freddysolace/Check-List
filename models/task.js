const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    date: {
        type: Date,
        required: [true,'date is required']
    },
    time1: {
        type: String,
        required: [true, 'time is required']
    },
    time2: {
        type: String,
        required: [true, 'time is required']
    }
}, {timestamps: true})

module.exports = mongoose.model('Tasks',taskSchema);