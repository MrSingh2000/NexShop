const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectMongoDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) return handler(req, res);

  try {
    await mongoose.connect(mongoURI);
    console.log("Conneted to database");
    return handler(req, res);
  } catch (error) {
    console.log("Error while conneting to database: ", error);
  }
};

export default connectMongoDB;
