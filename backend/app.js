const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const path = require('path');

const connectDB = require('./config/DB');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const { seedProducts } = require('./controller/productController');
const { seedAdminUser } = require('./controller/authController');

const app = express();

// Middleware
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Connect to database and seed data
const startServer = async () => {
  await connectDB();
  await seedProducts();
  await seedAdminUser();

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();

module.exports = app;