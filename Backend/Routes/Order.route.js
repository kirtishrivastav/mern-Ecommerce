const OrderController= require('../Controllers/Order.controler.js');
 const {jwtAuthMiddleWare} =require('../MiddlerWares/jwtMiddleWare.js');
 const {protect, admin}  = require('../MiddlerWares/AdminMidlleware.js');
 const express= require('express');
 const router= express.Router();


// Place a new order
router.post('/', jwtAuthMiddleWare, OrderController.placeOrder);

// Get order history for a user
router.get('/myorders',jwtAuthMiddleWare, OrderController.getOrderHistory);

// Get all orders (admin only)
router.get('/',protect, OrderController.getAllOrders);

module.exports= router;