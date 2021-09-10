const User = require('../models/user');
const Task = require('../models/task');
const express = require('express');
const jwt = require('jsonwebtoken');


//jwt secret
const JWT_SECRET = 'gjdsjhfdhieidjoejfo1928u39839738922hkfhfhihihdehhhduhihu373y8u93e9f8h3h93uefhfuo'


exports.sign_up = (req, res, next) => {

//     User.find({email: req.body.email}).exec()
//         .then(user => {
//             console.log(user)
//             if(user.length >=1) {
//                 const error = {
//                     // path: 'sign-up',
//                     message: 'Email already in use'
//                 }
//                 // res.error = error
//                 // res.render(path.join(__dirname,'views','sign-up'),[error]);
//                 return;
//             }
//         })
    
    const username = req.body.username;
    const userID = req.body.userID;
    const email = req.body.email;
    const password = req.body.password;
    

    const newuser = new User({
        username : username,
        email : email,
        password : password
    });
    newuser.save((err,savedUser) => {
        if (err) {
            console.log(err);
        } else {
            console.log(savedUser);
            res.redirect('/login');
        }
    });
}

exports.log_in = (req,res,next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;



    const user = new User({
        email : email,
        password : password
    });


    User.find({email: email,password: password}, function(err,user){

        const token = jwt.sign (
            {
                password: password,
                username: username
            },
            JWT_SECRET
        )


        console.log(user,token)
        res.render("user-dashboard",{user_info: user,data: token});
       
    })
        // .then(user => {
        //     // if (!user) {
        //     //     res.redirect("/404");
        //     // }
        //     // const user_name = user.username
        //     console.log(user);
        //     res.render("user-dashboard",{user_info: user});
        // }).catch(err => {
        //     console.log(err);
        // })
            
}