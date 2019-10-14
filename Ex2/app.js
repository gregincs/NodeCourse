const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First');
    next();
});

app.use((req, res, next) => {
    console.log('Second');
    next();
});

app.use('/users',(req, res, next) => {
    res.send('<h1>This is the USERS page</h1>');
});

app.use('/',(req, res, next) => {
    res.send('<h1>This is the default page</h1>');
});

app.listen(3000);