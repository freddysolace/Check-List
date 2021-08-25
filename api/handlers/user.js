const user = require('../models/user');


exports.sign_up = (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    

    const newuser = new user();
    newuser.username = username;
    newuser.email = email;
    newuser.password = password;
    newuser.save((err,savedUser) => {
        if (err) {
            console.log(err);
        } else {
            console.log(savedUser);
            res.redirect('/login');
        }
    });
}

