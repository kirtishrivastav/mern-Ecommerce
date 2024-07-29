// controllers/orderController.js
const Order = require('../Models/Order.model.js');
const Product=require('../Models/Product.model.js');

const { client } = require('../config/payPalconfig.js');

// Place a new order
exports.placeOrder = async (req, res) => {
  const { items, totalItems, paymentMethod } = req.body;
  const userId = req.user.id;

  if (!items || !totalItems || !paymentMethod) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Fetch all the product details for the given items
    const productDetails = await Product.find({ _id: { $in: items } });

    if (productDetails.length !== items.length) {
      return res.status(400).json({ message: 'Some items are not found in the product list' });
    }

    // Calculate the total amount
    const totalAmount = productDetails.reduce((total, product) => {
      return total + product.price;
    }, 0);

    // Create PayPal order if the payment method is PayPal
    let orderID;
    if (paymentMethod === 'PayPal') {
      const request = new client.orders.OrdersCreateRequest();
      request.prefer("return=representation");
      request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: totalAmount.toFixed(2),
          },
        }],
      });

      const order = await client.execute(request);
      orderID = order.result.id;
    }

    const order = new Order({
      items,
      totalAmount,
      totalItems,
      user: userId,
      paymentMethod,
      paymentStatus: paymentMethod === 'PayPal' ? 'pending' : 'paid',
      paypalOrderId: orderID || null,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
};

// Get order history for a user
exports.getOrderHistory = async (req, res) => {
  const userId=req.user.id;
  try {
    // Log user ID for debugging purposes
    console.log('Fetching order history for user ID:', userId);

    // Query orders for the authenticated user, populate items, and sort by createdAt descending
    const orders = await Order.find({ user: userId }).populate('items').sort({ createdAt: -1 });

    // Check if orders were found
    if (!orders || orders.length === 0) {
      console.log('No orders found for user ID:', userId);
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    // Return orders in JSON response
    return res.status(200).json(orders);
  } catch (error) {
    // Handle any errors and return an error response
    console.error('Failed to fetch order history:', error);
    res.status(500).json({ message: 'Failed to fetch order history', error: error.message });
  }
};


// Get all orders (admin only)
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name email').populate('items').sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};


// 
  exports.updateCart = async (req, res) => {
    const { id } = req.params;
    try {
      const cart = await Cart.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const result = await cart.populate('product');
  
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json(err);
    }
  };


 
