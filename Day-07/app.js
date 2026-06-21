const express = require('express');
const app = express();

const dbConnection = require('./config/dbConnection');
const userModel = require('./models/userModel');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/create-user', async (req, res) => {

    const newUser = await userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    console.log("Saved to Database: ", newUser);
   
    res.send(`<h2>User ${newUser.username} saved!</h2> <a href="/">Go back and register another</a>`);
});

app.listen(3000, () => {
    console.log("Server is running smoothly on port 3000");
});