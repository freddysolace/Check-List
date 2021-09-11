const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');
const contactRouter = require('./routes/contact');
const session = require('express-session');
const nodemailer = require("nodemailer");
require('dotenv').config();


//creating th express app
const app = express();


//connect to mongodb
const dbURI = process.env.DB_URL;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs')

//listening for requests


//middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));



app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized:true
}))

// Route Middlewares
app.use('/user',userRouter)
    .use('/task',taskRouter)
    .use('/contact',contactRouter)


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/login',(req,res) => {
    res.render('log-in');
});

app.get('/sign-up',(req,res) => {
    res.render('sign-up');
});

app.get('/user-dashboard',(req,res) => {
    console.log(req.session);
    if(req.session.user){
        res.render('user-dashboard', {user: req.session.user});
    }else{
        res.redirect('/login')
    }
});

app.get('/add-task',(req,res) => {
    res.render('add-task');
});

app.get('/user/add-task',(req,res) => {
    res.redirect('/add-task');
})

app.use('/error', (req, res) => {
    if (res.error.path.length > 2) {
        error = res.error;
        res.render(error.path, { error })
        return;
    }
});




//404 page
app.use((req,res, next) => {
    const error = {
        message: '',
        path: '404',
        status: ''
    }
    next(error);
});


