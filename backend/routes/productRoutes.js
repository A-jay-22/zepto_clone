const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} = require('../controller/productController');
const upload = require('../middleware/upload');

// Product routes
router.get('/', getAllProducts);
router.post('/upload', upload.single('image'), uploadImage);
router.get('/:id', getProductById);
router.post('/', upload.single('image'), createProduct);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
