const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET_KEY || 'zepto_clone_super_secret_jwt_key_2026';

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });
};

// Seed default admin if none exists
const seedAdminUser = async () => {
  try {
    const adminExists = await User.findOne({ role: 'admin' });
    if (!adminExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);
      await User.create({
        name: 'Zepto Super Admin',
        email: 'admin@zepto.com',
        password: hashedPassword,
        role: 'admin',
        cart: [],
        wishlist: [],
      });
      console.log('✅ Default Admin seeded: admin@zepto.com / admin123');
    }
  } catch (error) {
    console.warn('Note on admin seeding:', error.message);
  }
};

// @desc Register user
// @route POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Public registration is strictly for customers
    const userRole = 'customer';

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: userRole,
      cart: [],
      wishlist: [],
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'Registered successfully!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cart: user.cart,
        wishlist: user.wishlist,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Login user
// @route POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    // Customer login restriction: Admin users must use /admin/login
    if (user.role === 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Admin account detected. Please login using the Admin Login portal (/admin/login).',
        isAdmin: true,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Logged in successfully!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cart: user.cart || [],
        wishlist: user.wishlist || [],
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Admin login
// @route POST /api/auth/admin/login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials or not an admin account' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied: Admin privileges required' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Admin authentication successful!',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Sync user cart & wishlist
// @route POST /api/auth/sync
const syncUserData = async (req, res) => {
  try {
    const { email, cart, wishlist } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'User email is required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    if (cart !== undefined) {
      user.cart = cart;
    }
    if (wishlist !== undefined) {
      user.wishlist = wishlist;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: 'User cart and wishlist synced successfully',
      cart: user.cart,
      wishlist: user.wishlist,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  adminLogin,
  syncUserData,
  seedAdminUser,
};
