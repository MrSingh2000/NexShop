// Import necessary modules and dependencies
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import User from "@/models/User"; // Import the User model
import bcrypt from "bcryptjs"; // Import module for password hashing
import jwt from "jsonwebtoken"; // Import module for JWT token generation

// Define the API route handler
async function handler(req, res) {
  // Check if the HTTP method is POST, if not, return an error
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Authentication" });
    res.end();
  }

  // Extract email and password from the request body
  const { email, password } = req.body;

  // Find a user with the provided email in the database
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });

  // Compare the provided password with the hashed password stored in the database
  const matchPassword = bcrypt.compareSync(password, user.password);
  if (!matchPassword)
    return res.status(401).json({ error: "Invalid Credentials" });

  // Create a JWT token with user information and a secret key
  const jwtToken = await jwt.sign(
    {
      email: user.email,
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  // Respond with the generated JWT token
  res.status(200).json({ authToken: jwtToken });
}

// Connect the MongoDB middleware to the API route handler
export default connectMongoDB(handler);
