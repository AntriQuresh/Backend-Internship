// --- TASK 1: E-Commerce Order Processor ---
console.log("--- Task 1 Output ---");

// 1. Create the dummy order object
const order = {
    orderId: "ORD-999",
    itemName: "Mechanical Keyboard",
    price: 100,
    isAvailable: true, 
    userMembership: "Premium" // Test changing this to "Regular" or "Guest"
};

// 2. Write the arrow function
const processOrder = (orderData) => {
    // Check availability first
    if (orderData.isAvailable === false) {
        return "Order Rejected: Item Out of Stock";
    }

    // Set up a variable for the final price that we can change
    let finalPrice = orderData.price;

    // Apply the discounts based on membership
    if (orderData.userMembership === "Premium") {
        finalPrice = finalPrice - (finalPrice * 0.20); // 20% off
    } else if (orderData.userMembership === "Regular") {
        finalPrice = finalPrice - (finalPrice * 0.10); // 10% off
    }
    // Note: If they are a "Guest", the if statements are skipped and price stays the same

    // Return the final string using template literals (backticks)
    return `Order successful for ${orderData.itemName}. Total amount to pay is $${finalPrice}.`;
};

// Print the result to test it
console.log(processOrder(order));



// --- TASK 2: User Authentication & Role Verification ---
console.log("\n--- Task 2 Output ---");

// 1. Create the nested userSession object
const userSession = {
    username: "dev_student",
    isAuthenticated: true, // Try changing to false to test the bouncer
    profile: {
        age: 19,
        role: "Editor" // Try changing to "Admin" or "Viewer", or age to 17
    }
};

// 2. Write the arrow function
const checkAccess = (session) => {
    // The Bouncer Check: Kick them out if not logged in
    if (session.isAuthenticated === false) {
        return "Access Denied: Please log in first";
    }

    // Grab the nested variables just to make the code cleaner to read
    const userRole = session.profile.role;
    const userAge = session.profile.age;

    // Role Verification Logic
    if (userRole === "Admin") {
        return "Access Granted: Full administrative privileges.";
    } else if (userRole === "Editor") {
        // Nested if/else to check the editor's age
        if (userAge >= 18) {
            return "Access Granted: Editor dashboard.";
        } else {
            return "Access Denied: Editors must be 18+.";
        }
    } else if (userRole === "Viewer") {
        return "Access Denied: Viewers cannot access this route.";
    }
};

// Print the result to test it
console.log(checkAccess(userSession));