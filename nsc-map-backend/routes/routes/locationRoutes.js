const express = require('express');
const Location = require('../models/Location');
const auth = require('../middleware/auth'); // Protect routes
const router = express.Router();

// Get all locations
router.get('/', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});

// Add a new location (Protected)
router.post('/', auth, async (req, res) => {
    const { name, lat, lng, type } = req.body;
    try {
        const newLocation = new Location({ name, lat, lng, type });
        await newLocation.save();
        res.json({ msg: 'Location added', location: newLocation });
    } catch (err) {
        res.status(500).json({ msg: 'Error adding location' });
    }
});

// Update a location (Protected)
router.put('/:id', auth, async (req, res) => {
    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ msg: 'Location updated', location: updatedLocation });
    } catch (err) {
        res.status(500).json({ msg: 'Error updating location' });
    }
});

// Delete a location (Protected)
router.delete('/:id', auth, async (req, res) => {
    try {
        await Location.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Location deleted' });
    } catch (err) {
        res.status(500).json({ msg: 'Error deleting location' });
    }
});

module.exports = router;
