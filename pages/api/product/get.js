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

  try {
    const category = req.query.category;
    console.log("server category: ", category);
    let products;
    // categories available: footwear, clothing, electronics and others
    switch (category) {
      case "all":
        // Fetch all products from the database using the Product model
        products = await Product.find();
        break;
      case "footwear":
        products = await Product.find({ category: "footwear" });
        break;
      case "clothing":
        products = await Product.find({ category: "clothing" });
        break;
      case "electronics":
        products = await Product.find({ category: "electronics" });
        break;
      default:
        products = await Product.find({ category: "others" });
        break;
    }

    // Respond with the fetched products
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Connect the MongoDB middleware to the API route handler
export default connectMongoDB(handler);
