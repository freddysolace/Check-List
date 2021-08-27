const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const user = require('./api/models/user');
const bodyParser = require('body-parser');
const userRouter = require('./api/routes/user');
const taskRouter = require('./api/routes/task');
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


// Route Middlewares
app.use('/api/user',userRouter)
    .use('/api/task',taskRouter);


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/login',(req,res) => {
    res.render('log-in');
});

app.get('/sign-up',(req,res) => {
    res.render('sign-up', {error: null});
});

app.get('/user-dashboard',(req,res) => {
    res.render('user-dashboard');
});

app.get('/add-task',(req,res) => {
    res.render('add-task');
});

app.use('/error', (req, res) => {
    if (res.error.path.length > 2) {
        error = res.error;
        res.render(error.path, { error })
        return;
    }
})

//404 page
app.use((req,res, next) => {
    const error = {
        message: '',
        path: '404',
        status: ''
    }
    next(error);
});


