const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/zepto_clone';
    await mongoose.connect(dbUrl);
    console.log(`✅ MongoDB Connected to: ${dbUrl}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
  }
};

module.exports = connectDB;