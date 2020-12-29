const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  customerId: mongoose.Schema.ObjectId,
  owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  deliveryNotes: {
    type: String,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  },
  creditNo: {
    type: String,
    required: true
  },
  creditExp: {
    type: String,
    required: true
  },
  creditCode: {
    type: String,
    required: true
  },
  creditStreet: {
    type: String,
    required: true
  },
  creditCity: {
    type: String,
    required: true
  },
  creditState: {
    type: String,
    required: true
  },
  creditZip: {
    type: Number,
    required: true
  }
  // order: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref:'Order',
  //   required: true
  // }],
//  {
//   timestamps: true
// }
})

module.exports = mongoose.model('Customer', customerSchema)
