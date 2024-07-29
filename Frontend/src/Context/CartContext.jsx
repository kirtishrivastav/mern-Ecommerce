/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const CART_URL = 'http://localhost:5000/api/cart'; // backend URL

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const addToCart = async (product) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `${CART_URL}/add`,
        { product: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assume the response contains the entire cart item with the necessary structure
      const addedCartItem = response.data; // Adjust based on actual response structure

      setCart((prevCart) => [...prevCart, addedCartItem]);

      console.log("Cart after adding:", cart);

      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error.message);
      throw new Error('Failed to add item to cart');
    }
  };

 const removeFromCart = async (productId) => {
  const token = getToken();
  try {
    const response = await axios.delete(
      `${CART_URL}/delete/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Update local cart state after successful delete
    setCart((prevCart) => prevCart.filter((item) => item.product._id !== productId));

    console.log("Cart after removing:", cart);

    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error.message);
    throw new Error('Failed to remove item from cart');
  }
};

  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,setCart}}>
      {children}
    </CartContext.Provider>
  );
};
