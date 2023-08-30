// Import necessary modules and dependencies
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import verifyJwt from "@/middlewares/jwtToken"; // Import middleware to verify JWT token
import Product from "@/models/Product"; // Import the Product model
import User from "@/models/User"; // Import the User model
import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions

// Define the API route handler
async function handler(req, res) {
  // Check if the HTTP method is not POST, and return a 404 error response
  if (req.method != "POST") {
    res.status(404);
    res.end();
  }

  // Extract the user ID from the verified JWT token
  const userId = req.user.id;

  // Extract product details from the request body
  const { name, description, price, category, imageUrl } = req.body;

  // Create a new product using the Product model
  const product = await Product.create({
    name,
    description,
    price,
    category,
    imageUrl,
    createdBy: new mongoose.Types.ObjectId(userId),
  });

  // Find the user by ID
  const user = await User.findById(userId);

  // Update the user's list of products with the newly created product's ID
  const userProducts = user.products
    ? [...user.products, product._id]
    : [product._id];
  user.products = userProducts;

  // Save the updated user information
  const updatedUser = await user.save();

  // Respond with a success message
  res.status(200).json({ message: "Product added successfully" });
}

// Connect the MongoDB middleware and JWT verification middleware to the API route handler
export default connectMongoDB(verifyJwt(handler));
