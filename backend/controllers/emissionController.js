// 📁 backend/controllers/emissionController.js
const Emission = require('../models/Emission');

exports.createEmission = async (req, res) => {
  try {
    const emission = await Emission.create(req.body);
    res.status(201).json(emission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEmissions = async (req, res) => {
  try {
    const emissions = await Emission.find().sort({ date: -1 });
    res.json(emissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};