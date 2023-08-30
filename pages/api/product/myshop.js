// Import necessary modules and dependencies
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import verifyJwt from "@/middlewares/jwtToken"; // Import middleware to verify JWT token
import Product from "@/models/Product"; // Import the Product model
import User from "@/models/User"; // Import the User model
import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions

// Define the API route handler
async function handler(req, res) {
    // Check if the HTTP method is not POST, and return a 404 error response
    if (req.method != 'POST') {
        res.status(404);
        res.end();
    }

    // Extract the user ID from the verified JWT token
    const userId = new mongoose.Types.ObjectId(req.user.id);

    // Find the user by ID
    const user = await User.findById(userId);

    // If user doesn't exist, respond with an error
    if (!user) {
        res.status(404).json({ error: "User not found" });
        res.end();
    }

    // Extract product IDs associated with the user
    const productIds = user.products;

    // Fetch product details for each product ID
    const products = [];
    for (let i = 0; i < productIds.length; i++) {
        const product = await Product.findById(productIds[i]);
        products.push(product);
    }

    // Respond with the fetched products
    res.status(200).json({ products });
}

// Connect the MongoDB middleware and JWT verification middleware to the API route handler
export default connectMongoDB(verifyJwt(handler));
