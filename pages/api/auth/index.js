// Import necessary modules and dependencies
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import User from "@/models/User"; // Import the User model
import bcrypt from "bcryptjs"; // Import module for password hashing
import jwt from "jsonwebtoken"; // Import module for JWT token generation
import mongoose from "mongoose";

// Define the API route handler
async function handler(req, res) {
  // Check if the HTTP method is POST, if not, return an error
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Authentication" });
    res.end();
  }

  const userId = new mongoose.Types.ObjectId(res.user.id);
  const user = await User.findById(userId);

  if(!user){
    res.status(404).json({error: "User not found"});
    res.end();
  }
  
  res.status(200).json({ fullName: user.fullName, email: user.email });
}

// Connect the MongoDB middleware to the API route handler
export default connectMongoDB(handler);
