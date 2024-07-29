const Cart = require('../Models/Cart.model.js')


// get all products in cart
exports.fetchCartByUser = async (req, res) => {
  const { id } = req.user;
  
  try {
    // Find all cart items for the user and populate the 'product' field
    const cartItems = await Cart.find({ user: id }).populate('product');

    if (!cartItems) {
      return res.status(404).json({ message: 'Cart is empty' });
    }

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart items', error: err.message });
  }
};

// add to cart api
exports.addToCart = async (req, res) => {
  const { id } = req.user;
  const { product, quantity } = req.body;
  
  try {
    // Check if the item already exists in the cart
    let cartItem = await Cart.findOne({ user: id, product });

    if (cartItem) {
      // If the item exists, update the quantity
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // If the item does not exist, create a new cart item
      cartItem = new Cart({ product, quantity, user: id });
      await cartItem.save();
    }

    // Populate the product details
    await cartItem.populate('product');

    res.status(201).json(cartItem);
  } catch (err) {
    res.status(400).json({ message: 'Error adding to cart', error: err.message });
  }
};


// delete from cart
exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  
  try {
    // Attempt to find and delete the cart item by its product ID
    const deletedCartItem = await Cart.findOneAndDelete({ product: id });

    if (!deletedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.status(200).json({ message: 'Cart item deleted successfully', deletedCartItem });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete cart item', error: err.message });
  }
};

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