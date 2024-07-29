import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import './Checkout.css';
import { CartContext } from '../../Context/CartContext';

const Checkout = () => {
  // const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  const { cart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('card'); // default payment method

  useEffect(() => {
    // Calculate subtotal whenever cart items change
    calculateSubtotal(cart);
  }, [cart]);

  const calculateSubtotal = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    setSubtotal(total);
  };

  const handlePlaceOrder = async (details) => {
    try {
      const orderData = {
        items: cart.map(item => item.product._id),
        totalItems: cart.length,
        paymentMethod: paymentMethod === 'paypal' ? 'PayPal' : 'Credit Card',
        paypalOrderId: details.id // PayPal order ID
      };

      const response = await axios.post('/api/orders/placeOrder', orderData);

      if (response.status === 201) {
        alert('Order placed successfully');
       
      }
    } catch (error) {
      console.error('Failed to place order', error);
      alert('Failed to place order');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-2 d-grid gap-8 p-6 p-md-12 row row-cols row-cols-md-2">
        <div className="bg-light rounded-lg shadow-lg p-6 p-md-8 col order-summary">
          <h2 className="h4 font-weight-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item._id} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-4">
                  <img src={item.product.image} alt={item.product.name} width={64} height={64} className="rounded" />
                  <div>
                    <h3 className="font-weight-medium">{item.product.name}</h3>
                    <p className="text-muted">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-lg font-weight-bold">${(item.product.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="text-muted">Subtotal</p>
              <p className="font-weight-bold">${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-lg shadow-lg p-6 p-md-8 col payment-details">
          <h2 className="h4 font-weight-bold mb-4">Payment Details</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="First Last" />
              </div>
              <div className="col-12 mb-3 row-md-6 ">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea className="form-control" id="address" rows="3" placeholder="123 Main St, Anytown USA"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label className="form-label">Payment Method</label>
                <div className="d-flex gap-4 flex-column flex-md-row">
                  <label className="btn btn-outline-secondary d-flex align-items-center gap-2 mb-2 mb-md-0">
                    <input type="radio" name="payment" id="card" value="card" className="form-check-input me-2" defaultChecked onChange={() => setPaymentMethod('card')} />
                    <FontAwesomeIcon icon={faCreditCard} className="icon" />
                    Credit Card
                  </label>
                  <label className="btn btn-outline-secondary d-flex align-items-center gap-2 mb-2 mb-md-0">
                    <input type="radio" name="payment" id="paypal" value="paypal" className="form-check-input me-2" onChange={() => setPaymentMethod('paypal')} />
                    <FontAwesomeIcon icon={faPaypal} className="icon" />
                    PayPal
                  </label>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="card-number" className="form-label">Card Number</label>
                    <input type="text" className="form-control" id="card-number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="col-6 mb-3">
                    <label className="form-label">Expiry</label>
                    <div className="d-flex gap-2">
                      <select className="form-select" id="expiry-month">
                        <option value="" disabled selected>MM</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <select className="form-select" id="expiry-year">
                        <option value="" disabled selected>YYYY</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <label htmlFor="cvc" className="form-label">CVC</label>
                    <input type="text" className="form-control" id="cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
            {paymentMethod === 'paypal' ? (
              <PayPalScriptProvider >
                <PayPalButtons style={{ layout: 'horizontal' }} createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [{
                      amount: {
                        value: subtotal.toFixed(2),
                      },
                    }],
                  });
                }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(details => {
                      handlePlaceOrder(details);
                    });
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
