const User = require('../models/user');
const app = require('express')()

app.set('views', '../../views');
app.set('view engine', 'ejs');

exports.sign_up = (req, res, next) => {

    User.find({email: req.body.email}).exec()
        .then(user => {
            console.log(user)
            if(user.length >=1) {
                const error = {
                    path: 'sign-up',
                    message: 'Email already in use'
                }
                res.error = error
                res.redirect('/error');
                return;
            }
        })
    
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    

    // const newuser = new user();
    // newuser.username = username;
    // newuser.email = email;
    // newuser.password = password;
    // newuser.save((err,savedUser) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(savedUser);
    //         res.redirect('/login');
    //     }
    // });
}



