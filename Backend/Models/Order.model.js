const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    items: [
      { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
    ],
    totalAmount: { 
      type: Number,
    },
    totalItems: { 
      type: Number,
    },
    user: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    paymentMethod: { 
      type: String,
      required: true,
    },
    paymentStatus: { 
      type: String,
      default: 'pending',
    },
    status: { 
      type: String,
      default: 'pending',
    },
    paypalOrderId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
