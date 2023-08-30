import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  imageUrl: String, // URL to the product image
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'user'
  }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
