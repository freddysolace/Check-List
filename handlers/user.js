const User = require('../models/user');
const express = require('express');

const path = require('path');




// app.set('views', '../../views');
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, "public")));


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

    User.find({email: email,password: password}).exec()
        .then(user => {
            if (!user) {
                res.redirect("/404");
            }
            //res.redirect("user-dashboard");
            console.log(user);
            res.render("user-dashboard",{user});
        });
}