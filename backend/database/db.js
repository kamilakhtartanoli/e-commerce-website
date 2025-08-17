const mongoose = require("mongoose");

const db = async () => {
    const url = process.env.MONGODB_URL; // Use correct name
    try {
        await mongoose.connect(url); // Await the connection
        console.log("database connected");
    } catch (error) {
        console.log("Database connection error:", error.message);
    }
};

module.exports = { db };
