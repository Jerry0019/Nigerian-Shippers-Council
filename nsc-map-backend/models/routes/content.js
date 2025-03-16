const express = require('express');
const Content = require('../models/Content');
const router = express.Router();

// Fetch content
router.get('/', async (req, res) => {
    try {
        const content = await Content.findOne();
        res.json(content);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching content', error: err });
    }
});

// Update content
router.post('/', async (req, res) => {
    const { html, css } = req.body;
    try {
        let content = await Content.findOne();
        if (!content) {
            content = new Content({ html, css });
        } else {
            content.html = html;
            content.css = css;
        }
        await content.save();
        res.json({ message: 'Content updated successfully', content });
    } catch (err) {
        res.status(500).json({ message: 'Error updating content', error: err });
    }
});

module.exports = router;