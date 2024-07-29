const express= require('express');
const router= express.Router();
const CartController= require('../Controllers/Cart.controler.js');
const {jwtAuthMiddleWare} =require('../MiddlerWares/jwtMiddleWare.js');


// routers for cart controllers
router.get('/',jwtAuthMiddleWare, CartController.fetchCartByUser);
router.post('/add', jwtAuthMiddleWare, CartController.addToCart)
router.delete('/delete/:id', jwtAuthMiddleWare, CartController.deleteFromCart);
router.put('/update', jwtAuthMiddleWare,CartController.updateCart);
module.exports= router;