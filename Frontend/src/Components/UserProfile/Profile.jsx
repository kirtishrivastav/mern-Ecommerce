import  { useState, useEffect, useContext } from 'react';
import './userProfile.css';
import { UserContext } from '../../Context/UserContext';
import axios from 'axios';

function Profile() {
  const { user, loading } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/order/myorders/', {
          headers: {
            Authorization: `Bearer ${token}` // Send token in Authorization header
          }
        });
        console.log('Order history fetched:', response.data);
        setOrders(response.data); // Assuming response.data is an array of orders
      } catch (error) {
        console.error('Failed to fetch order history:', error);
        // Handle error, show message to user, etc.
      }
    };

    if (token) {
      fetchOrderHistory();
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img src={user.avatar} alt="Avatar" className="border" width="100" height="100" />
          <h1 className="mt-3">{user.fullName}</h1>
          <p className="text-muted">{user.email}</p>
        </div>
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h2>Order History</h2>
            </div>
            <div className="card-body">
              {orders.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.totalAmount}</td>
                        <td>
                          <span className={`badge ${order.status === 'Fulfilled' ? 'bg-success' : 'bg-secondary'}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No orders found</p>
              )}
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Update Profile</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
