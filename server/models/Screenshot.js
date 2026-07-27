const mongoose = require('mongoose');

const ScreenshotSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['screenshot', 'photo', 'screen_recording']
  },
  url: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Screenshot', ScreenshotSchema);
