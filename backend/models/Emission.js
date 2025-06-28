// 📁 backend/models/Emission.js
const mongoose = require('mongoose');

const emissionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: 'kg'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Emission', emissionSchema);