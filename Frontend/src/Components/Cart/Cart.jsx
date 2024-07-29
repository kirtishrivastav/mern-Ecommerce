// src/components/Cart/CartComponent.js
import { Link } from 'react-router-dom';
import './Cart.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext,useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import axios from 'axios';

const CartComponent = () => {
  const { cart, removeFromCart ,setCart} = useContext(CartContext);
  const getToken = () => {
    return localStorage.getItem('token');
  };
  
    useEffect(()=>{
      const fetchCartItems = async () => {
        const token = getToken();
        try {
          const response = await axios.get(`http://localhost:5000/api/cart/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          
          console.log("fetched cart items ",response.data)
          setCart(response.data)
        } catch (error) {
          console.error('Error fetching cart items:', error.message);
          throw new Error('Failed to fetch cart items');
        }
      };
      fetchCartItems();
    },[])
  

  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <div className="item-details">
              <img src={item.product.image} alt={item.product.name} className="item-image" />
              <div>
                <h3>{item.product.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="item-deletion">
              <p>{(item.product.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.product._id)} className="remove-button">
                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
                <span className="sr-only">Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr className="separator" />
      <div className="cart-total">
        <p>Total: ${total.toFixed(2)}</p>
     <Link to="/checkout">
        <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartComponent;
