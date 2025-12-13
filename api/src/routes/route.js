const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');

// Mount auth routes
router.use('/', authRoutes);


router.get('/', (req, res) => {
  res.send('Welcome to the SaaS Meta Backend!');
});

// Sample route
router.get('/status', (req, res) => {
  res.json({ message: 'API is running smoothly!' });
});

module.exports = router;