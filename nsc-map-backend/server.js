const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes'); // Adjusted path
const contentRoutes = require('./routes/contentRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors({ origin: 'https://nigerianshipperscouncilmap.netlify.app' })); // Enable CORS for frontend

// Routes
app.get('/', (req, res) => {
    res.send('Backend is running. Use /api/content to fetch or update content.');
});
app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/content', contentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
