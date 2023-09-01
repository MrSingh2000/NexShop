// Import necessary modules and dependencies
import connectMongoDB from "@/middlewares/db"; // Import middleware to connect to MongoDB
import verifyJwt from "@/middlewares/jwtToken"; // Import middleware to verify JWT token
import Product from "@/models/Product"; // Import the Product model
import User from "@/models/User"; // Import the User model
import mongoose from "mongoose"; // Import Mongoose for MongoDB interactions

// Define the API route handler
async function handler(req, res) {
  // Extract the product ID from the request query
  const productId = new mongoose.Types.ObjectId(req.query.id);

  // Handle GET request
  if (req.method == "GET") {
    // Find the product by its ID
    const product = await Product.findById(productId);

    // If the product is not found, respond with an error
    if (!product) {
      res.status(404).json({ error: "Product Not Found" });
      res.end();
    }

    // Respond with the product details
    res.status(200).json({ product });

  // Handle DELETE request
  } else if (req.method == "DELETE") {
    const userId = new mongoose.Types.ObjectId(req.user.id);
    // Find and delete the product by its ID
    const product = await Product.findByIdAndDelete(productId);
    const user = await User.findById(userId);
    user.products = user.products.filter((item) => item !== productId);
    await user.save();
    
    res.status(200).send("DELETED");

  // Handle PUT request
  } else if (req.method == "PUT") {
    // Extract the user ID from the verified JWT token
    const userId = new mongoose.Types.ObjectId(req.user.id);

    // Find the user by ID to verify authentication
    const user = await User.findById(userId);
    if (!user) {
      res.status(401).json({ error: "Invalid Authentication" });
      res.end();
    }

    // Extract product details from the request body
    const { name, description, price, category, imageUrl } = req.body;

    // Find the product by its ID
    const product = await Product.findById(productId);

    // Update the product details with the provided data
    await Product.findByIdAndUpdate(
      productId,
      {
        name: name ? name : product.name,
        description: description ? description : product.description,
        price: price ? price : product.price,
        category: category ? category : product.category,
        imageUrl: imageUrl ? imageUrl : product.imageUrl,
      },
      { upsert: true }
    );

    // Respond with a success message
    res.status(200).send("done");
  }
}

// Connect the MongoDB middleware and JWT verification middleware to the API route handler
export default connectMongoDB(verifyJwt(handler));
