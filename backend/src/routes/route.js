const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Welcome to the SaaS Meta Backend!');
});

// Sample route
router.get('/status', (req, res) => {
  res.json({ status: 'API is running smoothly!' });
});

module.exports = router;