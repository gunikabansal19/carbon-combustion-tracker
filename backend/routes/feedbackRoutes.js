const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST feedback
router.post('/', async (req, res) => {
  try {
    const { username = 'Anonymous', message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    const newFeedback = new Feedback({ username, message, date: new Date() });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback saved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

module.exports = router;
