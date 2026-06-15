// --- TASK 1 ---
console.log("--- Task 1 Output ---");


let username = "Student123"; 
let email = "student@gmail.com";
let password = "mysecurepassword"; 


if (username === "") {
    
    console.log("Invalid Username");
} else if (password.length < 8) {
    
    console.log("Password Too Short");
} else {
    
    console.log("Registration Successful");
} 


// --- TASK 2 ---
console.log("--- Task 2 Output ---");


const savedEmail = "admin@gmail.com";
const savedPassword = "admin123";


const loginEmail = "admin@gmail.com";
const loginPassword = "admin123";


if (loginEmail === savedEmail && loginPassword === savedPassword) {
    
    console.log("Login Successful");
} else {

    console.log("Invalid Credentials");
}
