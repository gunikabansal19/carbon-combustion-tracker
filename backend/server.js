// 📁 backend/server.js
require('dotenv').config( { path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const emissionRoutes = require('./routes/emissionRoutes');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const feedbackRoutes = require('./routes/feedbackRoutes');


// ✅ Middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// ✅ Database Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/emissions', emissionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);

// ✅ Base Route
app.get('/', (req, res) => {
  res.send('🌿 Carbon Emission Tracker API Running');
});

// ✅ Error Middleware
app.use(errorHandler);

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
