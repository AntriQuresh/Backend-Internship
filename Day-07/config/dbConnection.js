const mongoose = require("mongoose");

const dbConnection = mongoose.connect("mongodb://127.0.0.1:27017/internshipDay7")
.then(() => {
    console.log("Database Connected Successfully!");
})
.catch((error) => {
    console.log("Database connection error: ", error);
});

module.exports = dbConnection;