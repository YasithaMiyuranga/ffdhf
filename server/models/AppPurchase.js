const mongoose = require('mongoose');

const AppPurchaseSchema = new mongoose.Schema({
  appName: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  paymentTime: {
    type: Date,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('AppPurchase', AppPurchaseSchema);
