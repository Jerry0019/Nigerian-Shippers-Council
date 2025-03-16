const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  type: { type: String, required: true }, // Example: "Port", "Airport"
});

module.exports = mongoose.model('Location', LocationSchema);
