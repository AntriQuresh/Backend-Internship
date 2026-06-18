// 1. Import the express package we downloaded
const express = require('express');

// 2. Initialize the express application instance
const app = express();

// 3. Define the PORT number where our server will listen
const PORT = 3000;

// 4. Create the Routes 

// Main/Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Main Entrance of the Server!');
});

// /about route
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// /profile route
app.get('/profile', (req, res) => {
    res.send('Welcome to your User Profile.');
});

// /contact-us route
app.get('/contact-us', (req, res) => {
    res.send('Please contact us at admin@example.com.');
});

// /setting route
app.get('/setting', (req, res) => {
    res.send('Adjust your account settings here.');
});

// /games route
app.get('/games', (req, res) => {
    res.send('Welcome to the gaming lounge!');
});

// 5. Start the server and make it listen for requests
app.listen(PORT, () => {
    console.log("Server is running smoothly on port", PORT);
});