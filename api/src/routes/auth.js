const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


// User login route
router.post('/login', authController.loginUser);

// User logout route
router.post('/logout', authController.logoutUser);

// Password reset route
router.post('/reset-password', authController.resetPassword);

module.exports = router;