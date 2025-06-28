const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  username: { type: String, default: 'Anonymous' },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
