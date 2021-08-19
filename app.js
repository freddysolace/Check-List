const express = require('express');

//creating th express app
const app = express();

//listening for requests
app.listen(3000);

app.get('/',(req,res) => {
    res.sendFile('./index.html',{root: __dirname});
});

app.get('/log-in',(req,res) => {
    res.sendFile('./pages/log-in.html',{root: __dirname});
});

app.get('/sign-up',(req,res) => {
    res.sendFile('./pages/sign-up.html',{root: __dirname});
});

app.get('/user-dashboard',(req,res) => {
    res.sendFile('./pages/user-dashboard.html',{root: __dirname});
});

app.get('/add-task',(req,res) => {
    res.sendFile('./pages/add-task.html',{root: __dirname});
});

//404 page
app.use((req,res) => {
    res.status(404).sendFile('./pages/404.html', {root: __dirname})
});


