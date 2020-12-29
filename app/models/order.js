const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  orderId: mongoose.Schema.ObjectId,
  food: {
    type: String,
    required: true
  },
  date: {
      type: String,
      required: true
    },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {
timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
