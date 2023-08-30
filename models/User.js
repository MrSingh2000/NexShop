import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  products: [{
    type: mongoose.Types.ObjectId,
    ref: 'product'
  }]
});

// Create and export the User model based on the schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
