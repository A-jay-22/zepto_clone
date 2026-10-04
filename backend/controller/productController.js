const Product = require('../models/Product');

// Default initial catalog data to seed into DB if empty
const initialSeedProducts = [
  // Laundry / Care
  {
    name: "Surf Excel Matic Top Load Detergent Liquid Refill",
    category: "laundry",
    price: 333,
    oldPrice: 355,
    offer: "₹22 OFF",
    weight: "1 pack (2 kg)",
    brand: "Surf Excel",
    rating: 5,
    reviews: "15.0k",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/9797e0a8-4ff1-42bd-9c6c-c189795730f3/Surf-Excel-Matic-Top-Load-Detergent-Liquid-Refill-Tough-Dried-Stain-Removal.jpg",
  },
  {
    name: "Rin Matic Top Load Detergent Liquid Pouch",
    category: "laundry",
    price: 219,
    oldPrice: 260,
    offer: "₹41 OFF",
    weight: "1 pack (2 kg)",
    brand: "Rin",
    rating: 4.8,
    reviews: "40.0k",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-1200-1200,pr-true,f-auto,q-40,dpr-2/cms/product_variant/14b059a9-b0f1-4016-bf36-98399e86a83b/Rin-Matic-Top-Load-Detergent-Liquid-Pouch.jpg",
  },
  // Cafe & Beverages
  {
    name: "Plain Maggi Hot Bowl",
    category: "cafe",
    price: 79,
    oldPrice: 99,
    offer: "₹20 OFF",
    weight: "250 g",
    brand: "Zepto Cafe",
    rating: 4.2,
    reviews: "165.0k",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/bda5d838-4eda-4990-9032-9fc5d5cc284a/Plain-Maggi-.jpeg",
  },
  {
    name: "Crispy Veg Puff",
    category: "cafe",
    price: 69,
    oldPrice: 109,
    offer: "₹40 OFF",
    weight: "100 g",
    brand: "Zepto Cafe",
    rating: 4.3,
    reviews: "144.7k",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-2400-2400,pr-true,f-auto,q-40,dpr-2/cms/product_variant/6c2b8332-8ffa-48e2-bac9-74feda4da37c/Veg-Puff-.jpeg",
  },
  {
    name: "Cheesy Garlic Bread",
    category: "cafe",
    price: 139,
    oldPrice: 169,
    offer: "₹30 OFF",
    weight: "120 g",
    brand: "Zepto Cafe",
    rating: 4.0,
    reviews: "55k",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-403,ar-4972-4972,pr-true,f-auto,q-40,dpr-2/cms/product_variant/f6990adb-b15d-4190-9c28-799be3b5b812/Garlic-Bread-with-Cheese-Dip.jpeg",
  },
  // Fresh
  {
    name: "Fresh Red Apples",
    category: "fresh",
    price: 149,
    oldPrice: 199,
    offer: "₹50 OFF",
    weight: "4 pcs (approx 500g)",
    brand: "Zepto Fresh",
    rating: 4.7,
    reviews: "12.4k",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
  },
  {
    name: "Farm Fresh Bananas",
    category: "fresh",
    price: 49,
    oldPrice: 65,
    offer: "₹16 OFF",
    weight: "1 Robusta bunch (6 pcs)",
    brand: "Zepto Fresh",
    rating: 4.8,
    reviews: "22.1k",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",
  },
  // Toys
  {
    name: "Remote Control Racing Car",
    category: "toys",
    price: 499,
    oldPrice: 899,
    offer: "₹400 OFF",
    weight: "1 unit",
    brand: "SpeedToys",
    rating: 4.6,
    reviews: "3.4k",
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500",
  },
  {
    name: "Classic Building Blocks 100 Pcs",
    category: "toys",
    price: 349,
    oldPrice: 599,
    offer: "₹250 OFF",
    weight: "1 box",
    brand: "LegoCraft",
    rating: 4.9,
    reviews: "5.8k",
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500",
  },
  // Electronics
  {
    name: "Wireless Bluetooth Earbuds TWS",
    category: "electronics",
    price: 899,
    oldPrice: 1999,
    offer: "₹1100 OFF",
    weight: "1 unit",
    brand: "boAt",
    rating: 4.5,
    reviews: "28.3k",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
  },
  {
    name: "Fast Charging 20000mAh Power Bank",
    category: "electronics",
    price: 1299,
    oldPrice: 2499,
    offer: "₹1200 OFF",
    weight: "1 unit",
    brand: "Mi",
    rating: 4.6,
    reviews: "19.5k",
    image: "https://images.unsplash.com/photo-1609592426868-23d6a2f8c5b5?w=500",
  },
  // Mobile
  {
    name: "Braided Fast Type-C Cable 65W",
    category: "mobile",
    price: 199,
    oldPrice: 499,
    offer: "₹300 OFF",
    weight: "1.2 meter",
    brand: "Portronics",
    rating: 4.7,
    reviews: "45.1k",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500",
  },
  // Beauty
  {
    name: "Hydrating Vitamin C Face Wash",
    category: "beauty",
    price: 249,
    oldPrice: 349,
    offer: "₹100 OFF",
    weight: "100 ml",
    brand: "Mamaearth",
    rating: 4.6,
    reviews: "11.2k",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
  },
  // Fashion
  {
    name: "Classic Unisex Cotton T-Shirt",
    category: "fashion",
    price: 399,
    oldPrice: 799,
    offer: "₹400 OFF",
    weight: "Size: L",
    brand: "Roadster",
    rating: 4.4,
    reviews: "8.9k",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
  },
  // Home Item
  {
    name: "Aroma Diffuser & Air Freshener",
    category: "home-item",
    price: 299,
    oldPrice: 599,
    offer: "₹300 OFF",
    weight: "1 pack (250 ml)",
    brand: "Godrej aer",
    rating: 4.5,
    reviews: "14.2k",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
  }
];

// Seed initial products if collection is empty
const seedProducts = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(initialSeedProducts);
      console.log('✅ Seeded default Zepto products into MongoDB');
    }
  } catch (error) {
    console.error('Error seeding products:', error.message);
  }
};

// @desc Get all products (with optional category and search query)
// @route GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category.toLowerCase();
    }

    if (search && search.trim() !== '') {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { name: searchRegex },
        { brand: searchRegex },
        { category: searchRegex },
        { description: searchRegex },
      ];
    }

    const products = await Product.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve products',
      error: error.message,
    });
  }
};

// @desc Get single product
// @route GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Upload product image (Admin / Multer)
// @route POST /api/products/upload
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload an image file' });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully!',
      imageUrl,
      filename: req.file.filename,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Create new product (Admin)
// @route POST /api/products
const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      oldPrice,
      brand,
      description,
      inStock,
    } = req.body;

    if (!name || !category || price === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide product name, category, and price.',
      });
    }

    // Handle image from file (multer) or URL
    let imageUrl = '';
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    } else if (req.body.image) {
      imageUrl = req.body.image;
    } else {
      imageUrl = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500';
    }

    // Auto-compute offer text if not provided
    const numPrice = Number(price);
    const numOldPrice = Number(oldPrice) || numPrice;
    let offer = req.body.offer || '';
    if (!offer && numOldPrice > numPrice) {
      offer = `₹${numOldPrice - numPrice} OFF`;
    }

    const newProduct = await Product.create({
      name: name.trim(),
      category: category.toLowerCase().trim(),
      price: numPrice,
      oldPrice: numOldPrice,
      offer,
      brand: brand || 'Zepto',
      image: imageUrl,
      description: description || '',
      inStock: inStock !== undefined ? inStock === true || inStock === 'true' : true,
      weight: req.body.weight || '',
      rating: req.body.rating ? Number(req.body.rating) : null,
      reviews: req.body.reviews || '',
    });

    res.status(201).json({
      success: true,
      message: 'Product added successfully!',
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create product',
      error: error.message,
    });
  }
};

// @desc Update product (Admin)
// @route PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updated = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      product: updated,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete product (Admin)
// @route DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
  seedProducts,
};
