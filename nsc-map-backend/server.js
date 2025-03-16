const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
