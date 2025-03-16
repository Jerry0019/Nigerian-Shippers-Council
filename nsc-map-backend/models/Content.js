const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    html: { type: String, required: true },
    css: { type: String, required: true },
});

module.exports = mongoose.model('Content', ContentSchema);