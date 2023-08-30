// Import necessary modules and dependencies
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import User from "@/models/User"; // Import the User model
import bcrypt from "bcryptjs"; // Import module for password hashing
import jwt from "jsonwebtoken"; // Import module for JWT token generation

// Define the API route handler
async function handler(req, res) {
  // Check if the HTTP method is POST, if not, return a "Not Found" error
  if (req.method !== "POST") {
    res.status(404).json({ error: "Not Found!" });
    res.end();
  }

  // Extract fullName, email, and password from the request body
  const { fullName, email, password } = req.body;

  // Check if a user with the provided email already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(401).json({ error: "User already exists" });

  // Generate a salt and hash the password using bcrypt for secure storage
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);

  // Create a new user with the provided data and the encrypted password
  const user = await User.create({
    fullName,
    email,
    password: encryptedPassword,
  });

  // Generate a JWT token containing user information and a secret key
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
