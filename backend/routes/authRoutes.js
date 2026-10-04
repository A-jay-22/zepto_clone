const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  adminLogin,
  syncUserData,
} = require('../controller/authController');

// Auth routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/login', adminLogin);
router.post('/sync', syncUserData);

module.exports = router;
