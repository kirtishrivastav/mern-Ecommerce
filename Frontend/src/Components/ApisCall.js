import axios from 'axios';

const CART_URL = 'http://localhost:5000/api/cart'; // backend URL

// Function to fetch all products in the cart for the current user
export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${CART_URL}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to add a product to the cart
export const addToCart = async (product, quantity) => {
  try {
    const response = await axios.post(`${CART_URL}/add`, { product, quantity }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Function to delete a product from the cart
export const deleteFromCart = async (itemId) => {
  try {
    const response = await axios.delete(`${CART_URL}/remove${itemId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you store the token in localStorage
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
