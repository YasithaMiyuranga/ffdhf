const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['call', 'sms', 'keylogger', 'browser_history', 'app_usage', 'contact', 'wifi']
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

module.exports = mongoose.model('Log', LogSchema);
