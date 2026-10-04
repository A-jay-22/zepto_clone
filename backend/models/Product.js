const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      enum: [
        'cafe',
        'fresh',
        'toys',
        'electronics',
        'mobile',
        'beauty',
        'fashion',
        'home-item',
        'laundry',
        'other',
      ],
      lowercase: true,
    },
    categoryName: {
      type: String,
      default: function () {
        const catMap = {
          cafe: 'Cafe & Beverages',
          fresh: 'Fresh Fruits & Veggies',
          toys: 'Toys & Games',
          electronics: 'Electronics',
          mobile: 'Mobiles & Accessories',
          beauty: 'Beauty & Skincare',
          fashion: 'Fashion',
          'home-item': 'Home Needs',
          laundry: 'Laundry Care',
          other: 'General Store',
        };
        return catMap[this.category] || 'General Store';
      },
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    offer: {
      type: String,
      default: '',
    },
    weight: {
      type: String,
      default: '',
    },
    brand: {
      type: String,
      default: 'Zepto',
    },
    rating: {
      type: Number,
      default: null,
    },
    reviews: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      required: true,
      default: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500',
    },
    description: {
      type: String,
      default: '',
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Search indexing
productSchema.index({ name: 'text', category: 'text', brand: 'text' });

module.exports = mongoose.model('Product', productSchema);
