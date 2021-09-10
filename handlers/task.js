const Task = require('../models/task');
const express = require('express');

exports.show_page = (req, res,next )=> {
    res.render('add-task');
}

exports.redirect_page = (req,res,next) => {
    res.redirect('add-task')
}

exports.create_task = (req,res,next) => {
    const title = req.body.title;
    const date = req.body.date;
    const time1 = req.body.time1;
    const time2 = req.body.time2;

    const tasks = new Task({
        title : title,
        date : date,
        time1 : time1,
        time2 : time2
    });

    tasks.save((err,savedTask) => {
        if (err) {
            console.log(err);
        } else {
            console.log(savedTask);
            res.render('/user/user-dashboard', {tasklist : task});
        }
    });
}

exports.update_task = (req,res,next) => {

}

exports.delete_task = (req,res,next) => {

}