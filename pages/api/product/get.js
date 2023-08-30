// Import necessary modules and dependencies
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import Product from "@/models/Product"; // Import the Product model

// Define the API route handler
async function handler(req, res) {
  // Check if the HTTP method is not GET, and return a 404 error response
  if (req.method != "GET") {
    res.status(404);
    res.end();
  }

  // Fetch all products from the database using the Product model
  const products = await Product.find();

  // Respond with the fetched products
  res.status(200).json({ products });
}

// Connect the MongoDB middleware to the API route handler
export default connectMongoDB(handler);
