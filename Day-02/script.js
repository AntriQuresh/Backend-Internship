// --- TASK 1: E-Commerce Order Processor ---
console.log("--- Task 1 Output ---");

const order = {
    orderId: "ORD-999",
    itemName: "Mechanical Keyboard",
    price: 100,
    isAvailable: true, 
    userMembership: "Premium" // Test changing this to "Regular" or "Guest"
};

const processOrder = (orderData) => {
    // Check availability first
    if (orderData.isAvailable === false) {
        return "Order Rejected: Item Out of Stock";
    }

    let finalPrice = orderData.price;

    if (orderData.userMembership === "Premium") {
        finalPrice = finalPrice - (finalPrice * 0.20); // 20% off
    } else if (orderData.userMembership === "Regular") {
        finalPrice = finalPrice - (finalPrice * 0.10); // 10% off
    }

    return `Order successful for ${orderData.itemName}. Total amount to pay is $${finalPrice}.`;
};


console.log(processOrder(order));



// --- TASK 2: User Authentication & Role Verification ---
console.log("\n--- Task 2 Output ---");


const userSession = {
    username: "dev_student",
    isAuthenticated: true, 
    profile: {
        age: 19,
        role: "Editor" 
    }
};

const checkAccess = (session) => {

    if (session.isAuthenticated === false) {
        return "Access Denied: Please log in first";
    }

    const userRole = session.profile.role;
    const userAge = session.profile.age;

    if (userRole === "Admin") {
        return "Access Granted: Full administrative privileges.";
    } else if (userRole === "Editor") {

        if (userAge >= 18) {
            return "Access Granted: Editor dashboard.";
        } else {
            return "Access Denied: Editors must be 18+.";
        }
    } else if (userRole === "Viewer") {
        return "Access Denied: Viewers cannot access this route.";
    }
};

console.log(checkAccess(userSession));
