const express = require('express');
const router = express.Router();
const Emission = require('../models/Emission');

// GET all emissions
router.get('/', async (req, res) => {
  try {
    const emissions = await Emission.find().sort({ date: -1 });
    res.json(emissions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch emissions' });
  }
});

module.exports = router;
