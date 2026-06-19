const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
    res.render('index'); 
});

app.post('/get-from-data', (req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const password = req.body.password;


    console.log("--- New Form Submission ---");
    console.log("Username:", username);
    console.log("Email:", useremail);
    console.log("Password:", password);

    res.send("Data received successfully! Check your VS Code terminal for the output.");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
