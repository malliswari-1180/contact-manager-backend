const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS FIX - Allow both localhost and Vercel deployment
const allowedOrigins = [
  "http://localhost:3000",
  "https://your-app-name.vercel.app" // Update this after Vercel deployment
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    return callback(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// MongoDB Atlas connection (IMPORTANT for Render)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ MongoDB error:", err));

// Routes
const contactRoutes = require('./routes/contacts');
app.use('/api/contacts', contactRoutes);

// Root route (optional but good)
app.get("/", (req, res) => {
  res.send("Contact Manager API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
