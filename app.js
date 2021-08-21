const express = require('express');
const morgan = require('morgan');


//creating th express app
const app = express();

//register view engine
app.set('view engine', 'ejs')

//listening for requests
app.listen(3000);

//middleware and static files
app.use(express.static('public'));


app.get('/',(req,res) => {
    res.render('index');
});

app.get('/log-in.ejs',(req,res) => {
    res.render('log-in');
});

app.get('/sign-up.ejs',(req,res) => {
    res.render('sign-up');
});

app.get('/user-dashboard.ejs',(req,res) => {
    res.render('user-dashboard');
});

app.get('/add-task.ejs',(req,res) => {
    res.render('add-task');
});

//404 page
app.use((req,res) => {
    res.status(404).render('404')
});


