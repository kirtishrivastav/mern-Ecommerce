/* eslint-disable react/prop-types */
// UserContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get(`http://localhost:5000/api/user/showProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      setLoading(false); // Set loading to false after data is fetched
      console.log('User data updated:', response.data);
    } catch (error) {
      console.error('Error fetching user data', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    console.log("UserProvider mounted, calling updateUser");
    updateUser();
  }, []);

  console.log("user state in context", user);

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
