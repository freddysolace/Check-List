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



const userSchema = new Schema({
    username: {
        type: String,
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
    tasks : [ taskSchema ]
}, {timestamps: true})

module.exports = mongoose.model('Users',userSchema);