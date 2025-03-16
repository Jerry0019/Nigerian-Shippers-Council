const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const locationRoutes = require('./routes/locationRoutes'); // <-- ADD THIS

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Enable CORS for frontend URL
app.use(cors({ origin: 'https://nigerianshipperscouncilmap.netlify.app' }));

app.use('/api/users', userRoutes);
app.use('/api/locations', locationRoutes); // <-- ADD THIS

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
