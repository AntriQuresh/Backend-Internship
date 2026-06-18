const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Main Entrance of the Server!');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});


app.get('/profile', (req, res) => {
    res.send('Welcome to your User Profile.');
});


app.get('/contact-us', (req, res) => {
    res.send('Please contact us at admin@example.com.');
});


app.get('/setting', (req, res) => {
    res.send('Adjust your account settings here.');
});


app.get('/games', (req, res) => {
    res.send('Welcome to the gaming lounge!');
});

app.listen(PORT, () => {
    console.log("Server is running smoothly on port", PORT);
});