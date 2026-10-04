const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['customer', 'admin'],
      default: 'customer',
    },
    cart: [
      {
        id: String,
        name: String,
        price: Number,
        oldPrice: Number,
        image: String,
        weight: String,
        category: String,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    wishlist: [
      {
        id: String,
        name: String,
        price: Number,
        oldPrice: Number,
        image: String,
        weight: String,
        category: String,
        rating: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
