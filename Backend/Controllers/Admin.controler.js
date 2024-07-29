const Admin = require('../Models/Admin.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createAdmin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if an admin with the same username already exists
      const existingAdmin = await Admin.findOne({ username });
  
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }
  
      // Create a new admin instance
      const newAdmin = new Admin({ username, password });
      
      // Save the admin to the database
      await newAdmin.save();
  
      // Return success response
      res.status(201).json({ message: 'Admin created successfully', admin: newAdmin });
    } catch (error) {
      // Handle errors
      console.error('Error creating admin:', error.message);
      res.status(500).json({ message: 'Failed to create admin', error: error.message });
    }
  };

  exports.loginAdmind=async(req,res)=>{

   const { username, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create and return JWT token
    const payload = {
      admin: {
        id: admin.id,
        username: admin.username,
        isAdmin: true // You can include other admin-related data here if needed
      }
    };

    jwt.sign(payload, process.env.secretKey, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });

  } catch (error) {
    console.error('Error logging in admin:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
}

